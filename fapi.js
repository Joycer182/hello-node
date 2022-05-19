import axios from "axios";

const API_BASE_URL = "https://fapi.binance.com/fapi/v1/ticker";

export const getTickerPrice = async () => {
  try {
    // { data } es un Objeto, el resultado de la consulta a la API es un Objeto Json
    const { data } = await axios.get(API_BASE_URL + "/price");
    return data;
  } catch (e) {
    console.error(e);
    return [];
  }
};

export const get24hourVolume = async () => {
    try {
      const { data } = await axios.get(API_BASE_URL + "/24hr");
      return data;
    } catch (e) {
      console.error(e);
      return null;
    }
  };

  // export const get24hourVolumeBySymbol = async (_symbol) => {
  //   try {
  //     const { data } = await axios.get(API_BASE_URL + "/24hr", {
  //         params: {
  //             "symbol": _symbol
  //         }
  //     });
  //     return data;
  //   } catch (e) {
  //     console.error(e);
  //     return null;
  //   }
  // };