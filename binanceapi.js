// Importación de librería para el manejo de solicitudes HTTP para comunicación con la API.
import axios from "axios";

// URL base de la API de Futuros de Binance.
const API_BASE_URL = "https://fapi.binance.com/fapi/v1";

// Obtiene el listado de monedas y su precio actual en Futuros de Binance.
export const ObtenerPrecioActual = async () => {
    try {
        // { data } es un Objeto JSon, el resultado de la consulta a la API es un Objeto JSon
        const { data } = await axios.get(API_BASE_URL + "/ticker/price");
        return data;
    } catch (e) {
        console.error(e);
        return [];
    };
};

// Obtiene el histórico de los últimos "Limite" minutos, espaciados por "Intervalo" minutos, de la moneda de estudio en Futuros de Binance.
export const ObtenerHistoricoCompleto = async (MonedaEstudio , Intervalo , Limite) => {
    try {
        // { data } es un Objeto JSon, el resultado de la consulta a la API es un Objeto JSon
        const { data } = await axios.get(API_BASE_URL + `/klines?symbol=${(MonedaEstudio)}&interval=${(Intervalo)}m&limit=${(Limite)}`);
        return data;
    } catch (e) {
        console.error(e);
        return [];
    };
};

// Obtiene el valor histórico de la vela de la fecha = FechaPasada, espaciado en la temporalidad de "Intervalo" minutos, de la moneda de estudio en Futuros de Binance.
export const ObtenerHistoricoEspecifico = async (MonedaEstudio , Intervalo , FechaPasada) => {
    try {
        // { data } es un Objeto JSon, el resultado de la consulta a la API es un Objeto JSon
        const { data } = await axios.get(API_BASE_URL + `/klines?symbol=${(MonedaEstudio)}&interval=${(Intervalo)}m&startTime=${(FechaPasada)}&limit=1`);
        return data;
    } catch (e) {
        console.error(e);
        return [];
    };
};

// Obtiene el histórico de las últimas 24 horas de TODAS las monedas en Futuros de Binance.
export const ObtenerHistorico24Hr = async () => {
    try {
        // { data } es un Objeto JSon, el resultado de la consulta a la API es un Objeto JSon
        const { data } = await axios.get(API_BASE_URL + "/ticker/24hr");
        return data;
    } catch (e) {
        console.error(e);
        return [];
    };
};

/*
// Muestra el listado de monedas y su precio actual en Futuros de Binance.
const InfoActual = await ObtenerPrecioActual();
console.log(InfoActual);


// Muestra el histórico de los últimos 30 minutos, espaciados por minuto, de la moneda de estudio en Futuros de Binance.
const HistoricoBTC = await ObtenerHistorico("BTCUSDT",1,30);
// console.log(HistoricoBTC);

// Muestra el histórico de las últimas 24 horas de TODAS las monedas en Futuros de Binance.
const Historico24Hr = await ObtenerHistorico24Hr();
console.log(Historico24Hr);
*/