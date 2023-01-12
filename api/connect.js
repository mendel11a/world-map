import mysql from "mysql";

export const db=mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"mendel11",
    database:"world_map"
})