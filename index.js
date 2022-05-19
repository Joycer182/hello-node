import { insertVolume } from "./database.js";
import { getTickerPrice, get24hourVolumeBySymbol } from "./fapi.js";

(async () => {
  const currentPrices = await getTickerPrice();
  let resultados = {};
  // iterar sobre los precios actuales
  for (let i = 0; i < currentPrices.length; i += 1) {
    const _symbol = currentPrices[i].symbol;
    const volumen = await get24hourVolumeBySymbol(_symbol);
    resultados[_symbol] = volumen;
    console.log(new Date().toISOString(), resultados[_symbol]);
    if (volumen.volume) await insertVolume(_symbol, volumen.volume);
  }
  // finish the process
  process.exit(0);
})();
