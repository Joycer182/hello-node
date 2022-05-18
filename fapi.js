const API_BASE_URL = "https://fapi.binance.com/fapi/v1/ticker";

const getTickerPrice = async () => {
  try {
    const response = await fetch(API_BASE_URL + "/price");
    const data = await response.json();
    return data;
  } catch (e) {
      console.error(e);
    return [];
  }
};

(async () => {
  const data = await getTickerPrice();
  console.log(data);
})();
