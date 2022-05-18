import fs from "fs";
import {getTickerPrice,get24hourVolumeBySymbol} from "./fapi.js";
import {delay} from "./helpers.js";

(async () => {
    const currentPrices = await getTickerPrice();
    let resultados = {};
    // iterar sobre los precios actuales
    for(let i = 0; i < currentPrices.length; i+=1) {
        const _symbol = currentPrices[i].symbol;
        const volumen = await get24hourVolumeBySymbol(_symbol);
        resultados[_symbol] = volumen;
        console.log(new Date().toISOString(), resultados[_symbol]);
        await delay(1);
    }
    // guardar resultados
    fs.writeFileSync(`${new Date().toISOString().slice(0, 10)}_resultados.json`, JSON.stringify(resultados));
  })();