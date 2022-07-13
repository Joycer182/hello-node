// Importación de librería para el manejo de Bases de Datos con mysql.

import mysql from "mysql2/promise.js";

// Fuente de ayuda: https://evertpot.com/executing-a-mysql-query-in-nodejs/

// Credenciales para acceder a la Base de Datos.
// const connection = await mysql.createConnection({
const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "root",
  database: "CryptoMapa",
  multipleStatements: true,
});

// Consulta a la Base de Datos. Extrae el TODO el contenido de la Tabla CryptoVariacion.
export const LeerTodoBD = async () => {
  try {
    const Consulta = await connection.query(
      "SELECT * FROM CryptoVariacion LIMIT 300"
    );
    console.log("Consulta ejecutada con éxito.");
    return Consulta;
  } catch (e) {
    console.log("Error en la consulta.");
    console.error(e);
    return [];
  }
};

// Verificación de registro existente en la Base de Datos.
export const VerificaRegistroBD = async (Registro) => {
  try {
    const Consulta = await connection.query(
      `SELECT * FROM CryptoMapa.CryptoVariacion WHERE CryptoMapa.CryptoVariacion.symbol = ${mysql.escape(
        Registro
      )}`
    );
    console.log("Verificacion ejecutada con éxito.");
    return Consulta;
  } catch (e) {
    console.log("Error en la consulta.");
    console.error(e);
    return [];
  }
};

// Inserta valores de interés a la Base de Datos.
export const InsertarInformacion = async (
  symbol,
  price,
  priceChangePercent30min,
  priceChangePercent24hr,
  volumeChange24hr,
  name,
  ath,
  ath_change_percentage,
  market_cap_rank,
  SentidoMovimiento
) => {
  try {
    //await connection.execute(connection , `INSERT INTO CryptoVariacion (symbol , price , priceChangePercent30min , priceChangePercent24hr, volumeChange24hr, name, ath, ath_change_percentage, market_cap_rank, SentidoMovimiento) VALUES (${mysql.escape(symbol)} , ${mysql.escape(price)} , ${mysql.escape(priceChangePercent30min)} , ${mysql.escape(priceChangePercent24hr)} , ${mysql.escape(volumeChange24hr)} , ${mysql.escape(name)} , ${mysql.escape(ath)} , ${mysql.escape(ath_change_percentage)} , ${mysql.escape(market_cap_rank)} , ${mysql.escape(SentidoMovimiento)})`);
    // await connection.query(`INSERT INTO CryptoMapa.CryptoVariacion (symbol, price, priceChangePercent30min, priceChangePercent24hr, volumeChange24hr, name, ath, ath_change_percentage, market_cap_rank, SentidoMovimiento) VALUES (${mysql.escape(symbol)}, ${mysql.escape(price)}, ${mysql.escape(priceChangePercent30min)}, ${mysql.escape(priceChangePercent24hr)}, ${mysql.escape(volumeChange24hr)}, ${mysql.escape(name)}, ${mysql.escape(ath)}, ${mysql.escape(ath_change_percentage)}, ${mysql.escape(market_cap_rank)}, ${mysql.escape(SentidoMovimiento)}) ON DUPLICATE KEY UPDATE symbol = ${mysql.escape(symbol)}, price = ${mysql.escape(price)}, priceChangePercent30min = ${mysql.escape(priceChangePercent30min)}, priceChangePercent24hr = ${mysql.escape(priceChangePercent24hr)}, volumeChange24hr = ${mysql.escape(volumeChange24hr)}, name = ${mysql.escape(name)}, ath = ${mysql.escape(ath)}, ath_change_percentage = ${mysql.escape(ath_change_percentage)}, market_cap_rank = ${mysql.escape(market_cap_rank)}, SentidoMovimiento = ${mysql.escape(SentidoMovimiento)};`);
    console.log("Si entre a la funcion insertar");

    await connection.query(
      `INSERT INTO CryptoMapa.CryptoVariacion 
        (symbol, price, priceChangePercent30min, priceChangePercent24hr, volumeChange24hr, name,
             ath, ath_change_percentage, market_cap_rank, SentidoMovimiento) VALUES 
             (?) AS valores ON DUPLICATE KEY UPDATE price = valores.price, priceChangePercent30min = valores.priceChangePercent30min, priceChangePercent24hr = valores.priceChangePercent24hr, volumeChange24hr = valores.volumeChange24hr, name = valores.name, ath = valores.ath, ath_change_percentage = valores.ath_change_percentage, market_cap_rank = valores.market_cap_rank, SentidoMovimiento = valores.SentidoMovimiento`,
      [datos]
    );
    console.log("Información agregada correctamente a la Base de Datos.");
    return [];
  } catch (e) {
    console.log("Error en la inserción de información a la Base de Datos.");
    console.error(e);
    return [];
  }
};

// Actualiza un registro especifo de la Base de Datos.
export const ActualizarRegistro = async (
  symbol,
  price,
  priceChangePercent30min,
  priceChangePercent24hr,
  volumeChange24hr,
  name,
  ath,
  ath_change_percentage,
  market_cap_rank,
  SentidoMovimiento
) => {
  try {
    //await connection.execute(connection , `UPDATE CryptoVariacion SET price = ${mysql.escape(price)} , priceChangePercent30min = ${mysql.escape(priceChangePercent30min)} , priceChangePercent24hr = ${mysql.escape(priceChangePercent24hr)} , volumeChange24hr = ${mysql.escape(volumeChange24hr)} , name = ${mysql.escape(name)} , ath = ${mysql.escape(ath)} , ath_change_percentage = ${mysql.escape(ath_change_percentage)} , market_cap_rank = ${mysql.escape(market_cap_rank)} , SentidoMovimiento = ${mysql.escape(SentidoMovimiento)} WHERE symbol = ${mysql.escape(symbol)}`);
    await connection.query(
      `UPDATE CryptoVariacion SET price = ${mysql.escape(
        price
      )} , priceChangePercent30min = ${mysql.escape(
        priceChangePercent30min
      )} , priceChangePercent24hr = ${mysql.escape(
        priceChangePercent24hr
      )} , volumeChange24hr = ${mysql.escape(
        volumeChange24hr
      )} , name = ${mysql.escape(name)} , ath = ${mysql.escape(
        ath
      )} , ath_change_percentage = ${mysql.escape(
        ath_change_percentage
      )} , market_cap_rank = ${mysql.escape(
        market_cap_rank
      )} , SentidoMovimiento = ${mysql.escape(
        SentidoMovimiento
      )} WHERE symbol = ${mysql.escape(symbol)}`
    );
    console.log("Información actualizada correctamente.");
    return [];
  } catch (e) {
    console.log("Error en la actualización del registro en la Base de Datos.");
    console.error(e);
    return [];
  }
};

const TEST = await LeerTodoBD();
console.log(TEST[0].length);
await InsertarInformacion(
  "ANCBUSD",
  4000.45,
  41.25,
  78.56,
  55599.25,
  "MonedaEstudio",
  3.09,
  -84.57006,
  1,
  1
);

const Monedas = ["BTCUSDT", "ETHUSDT", "BTCBUSD", "ANCBUSD"];
const datos = Monedas.map((MonedaEstudio) => {
  return {
    symbol: MonedaEstudio,
    price: 4000.45,
    priceChangePercent30min: 41.25,
    priceChangePercent24hr: 78.56,
    volumeChange24hr: 55599.25,
    name: MonedaEstudio,
    ath: 3.09,
    ath_change_percentage: -84.57006,
    market_cap_rank: 1,
    SentidoMovimiento: 1,
  };
});

process.exit(0);

// let VerificaRegistroExistenteBD = await VerificaRegistroBD('JOSE');
// console.log(VerificaRegistroExistenteBD[0].length);
// if ( VerificaRegistroExistenteBD[0].length == 1) {
//     const PeticionConsulta = await LeerTodoBD();
//     console.log("Escribe 1");
// } else {
//     console.log("Borralo");
// };

// VerificaRegistroExistenteBD = await VerificaRegistroBD('BTCUSDT');
// if ( VerificaRegistroExistenteBD[0].length == 1) {
//     await ActualizarRegistro('BTCUSDT',40.45,41.25,78.56,"55599.25","bitcoin",3.09,-84.57006,1,1);
//     console.log("Actualizado");
// } else {
//     await InsertarInformacion('BTCUSDT',40.45,41.25,78.56,"55599.25","bitcoin",3.09,-84.57006,1,1);
//     console.log("Creado");
// };

// VerificaRegistroExistenteBD = await VerificaRegistroBD('LUNA2BUSD');
// if ( VerificaRegistroExistenteBD[0].length == 1) {
//     await ActualizarRegistro('LUNA2BUSD',40.45,41.25,78.56,"55599.25","bitcoin",3.09,-84.57006,1,1);
//     console.log("Actualizado");
// } else {
//     await InsertarInformacion('LUNA2BUSD',40.45,41.25,78.56,"55599.25","Terra Luna",3.09,-84.57006,1,1);
//     console.log("Creado");
// };
// await DesconectarBD();

// await ConectarBD();
// // await InsertarInformacion("OPUSDT",0.12,1.25,0.24,547856.25);
// await ActualizarRegistro("ADAUSDT",100.45,41.25,78.56,"12999.25","cardano",3.09,-84.57006,8,1);
// const PeticionConsulta = await LeerTodoBD();
// await DesconectarBD();
// // Muestra el contenido completo de la consulta a la Base de Datos.
// console.log(PeticionConsulta[0]);

/*
// Muestra el tamaño de la consulta a la Base de Datos.
console.log("Tamaño de la consulta = " , PeticionConsulta[0].length);

// Muestra el simbolo del registro 5 de la consulta a la Base de Datos.
console.log("Simbolo del registro 5 de la consulta = " , PeticionConsulta[0][5].symbol);
*/
