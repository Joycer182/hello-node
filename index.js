// JOSE import { insertVolume } from "./database.js";
import { getTickerPrice, get24hourVolume } from "./fapi.js";

(async () => {
  // const currentPrices = await getTickerPrice(); VITICO
  const currentPrices = await getTickerPrice();
  const Volumen24Horas = await get24hourVolume();

  // Con esto se extrae la lista de Criptomonedas listadas en Binances Futures - Forma 1
  let ArrayCriptomonedasListadas = [];
  currentPrices.forEach(element => {
    ArrayCriptomonedasListadas.push(element.symbol);
  });
  console.log(ArrayCriptomonedasListadas.length);
  // ArrayCriptomonedasListadas contiene la lista de las criptomonedas listadas en forma de arreglo


  // Con esto se extrae la lista de Criptomonedas listadas en Binances Futures - Forma 2
  const ArrayCriptomonedasListadas2 = currentPrices.map(ListaCriptomonedas => ListaCriptomonedas.symbol)
  console.log(ArrayCriptomonedasListadas2.length);
  // ArrayCriptomonedasListadas2 contiene la lista de las criptomonedas listadas en forma de arreglo

  
  // Con esto se filtra de forma directa la informacion de alguna criptomoneda en especifico.
  const PrecioActualBTC = currentPrices.filter(ListaCriptomonedas => ListaCriptomonedas.symbol === "BTCUSDT")
  console.log(PrecioActualBTC);

  // Con esto se obtiene la lista de monedas que cumplan con una condicion especifica del precio.
  const ArrayMonedas = currentPrices.filter(ListaCriptomonedas => ListaCriptomonedas.price > 50 && ListaCriptomonedas.price < 70)
  console.log(ArrayMonedas);

  for (let i = 0; i < currentPrices.length; i += 1) {
    if ( currentPrices[i].symbol == "BTCUSDT" )
    {
      console.log("Precio de BTCUSDT = " + currentPrices[i].price);
    }
  }

  for (let i = 0; i < Volumen24Horas.length; i += 1) {
    if ( Volumen24Horas[i].symbol == "BTCUSDT" )
    {
      console.log("Nombre de la Moneda = " + Volumen24Horas[i].symbol);
      console.log("Porcentaje cambio de precio 24 Hr = " + Volumen24Horas[i].priceChangePercent);
      console.log("Volumen de las Ultimas 24 Horas = " + Volumen24Horas[i].quoteVolume);
    }

  } 

  // console.log("Precio Actual");

  // console.log(currentPrices);

  // console.log("Volumen 24 Hr");

  // console.log(Volumen24Horas);

  // await insertInfo(symbol , price , priceChangePercent30min , priceChangePercent24hr, volumeChange24hr);

  // console.log("Listo");
  

  // let resultados = {};
  // // iterar sobre los precios actuales
  // for (let i = 0; i < currentPrices.length; i += 1) {
  //   const _symbol = currentPrices[i].symbol;
  //   const volumen = await get24hourVolumeBySymbol(_symbol);
  //   resultados[_symbol] = volumen;
  //   console.log(new Date().toISOString(), resultados[_symbol]);
  //   // JOSE if (volumen.volume) await insertVolume(_symbol, volumen.volume);
  // }
  // finish the process
  process.exit(0);
})();
