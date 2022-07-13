import _ from "lodash";
import axios from "axios";
import fs from "fs";
import info24 from "./info.24horas.json";
import infoActual from "./info.actual.json";

const mapaMonedas = new Map();

console.time("velas");

function combinarData(moneda, data) {
  if (mapaMonedas.has(moneda)) {
    const previous = mapaMonedas.get(moneda);
    const combined = {
      ...previous,
      ...data,
    };
    mapaMonedas.set(moneda, combined);
  } else {
    mapaMonedas.set(moneda, data);
  }
}

infoActual.forEach((info) => {
  mapaMonedas.set(info.symbol, info);
});

info24.forEach((info) => {
  const { volume, quoteVolume } = info;
  combinarData(info.symbol, { volume, quoteVolume: quoteVolume / 1000000 });
});

// lista de monedas - simbolos
const CHUNK_SIZE = 5; // cuidado con el callstack
const monedas = _.chunk(Array.from(mapaMonedas.keys()), CHUNK_SIZE);

for (let m = 0; m < monedas.length; m++) {
  const promesas = monedas[m].map((moneda) => {
    return axios.get(
      `https://fapi.binance.com/fapi/v1/klines?symbol=${moneda}&interval=1d&limit=30`
    );
  });
  // velas es un array de axios responses
  const velas = await Promise.all(promesas);
  velas.forEach(({ data }, index) => {
    if (data?.length) {
      const [velaInicio, velaFin] = [data[0][1], data[0][4]];
      combinarData(monedas[m][index], { velaInicio, velaFin });
    }
  });
}
// en este punto, convierto mapaMonedas en JSON Object
const monedasJSON = Object.fromEntries(mapaMonedas.entries());
const datos = mapaMonedas.values();

fs.writeFileSync("velas.json", JSON.stringify(monedasJSON));

console.timeEnd("velas");
