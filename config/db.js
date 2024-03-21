import { Sequelize } from "sequelize";

// Importamos la funcionalidad para las variables de entorno
import dotenv from 'dotenv';
dotenv.config();

// Configuración de Sequelize para conectar la base de datos de mysql :
const db = new Sequelize( process.env.DB_URL || '127.0.0.1', {
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    },
    operatorsAliases: false
} );

export default db;
