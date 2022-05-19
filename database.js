import mysql from "mysql2/promise";

const connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "futuros"
});

export const insertVolume = async (symbol, volume) => {
    await connection.execute(`INSERT INTO volumenes (symbol, volume) VALUES (${mysql.escape(symbol)}, ${volume})`);
} 