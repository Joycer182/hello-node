import mysql from "mysql2/promise.js";

const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "CryptoMapa"
});

console.log("iniciando conexion XXX");

await connection.connect((err) => {
    console.log("iniciando conexion");
    if (err) {
      console.log("Error occurred", err);
    } else {
      console.log("Conexión Exitosa: MySQL");
    }
    console.log("Supuestamente conectado");
});

console.log("iniciando conexion YYY");

export const ReadInfo = async () => {
    await connection.query(`SELECT * FROM CryptoVariacion LIMIT 300`);
    console.log();
};

// export const ReadInfo = async () => {
//   await connection.query("SELECT * FROM CryptoVariacion LIMIT 300");

// };

// export const insertInfo = async (symbol , price , priceChangePercent30min , priceChangePercent24hr, volumeChange24hr) => {
//      await connection.execute(`INSERT INTO CryptoVariacion (symbol , price , priceChangePercent30min , priceChangePercent24hr, volumeChange24hr) VALUES (${mysql.escape(symbol)} , ${mysql.escape(price)} , ${mysql.escape(priceChangePercent30min)} , ${mysql.escape(priceChangePercent24hr)} , ${mysql.escape(volumeChange24hr)})`);
//      console.log("Agregado");
// };

//ReadInfo();

// Cerrar la conexión
connection.end(() => {
    console.log("Conexión Cerrada: MySQL");
    // La conexión se ha cerrado
});
// export const insertVolume = acsync (symbol, volume) => {
//      await connection.execute(`INSERT INTO volumenes (symbol, volume) VALUES (${mysql.escape(symbol)}, ${volume})`);
// };