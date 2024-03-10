import { Sequelize } from "sequelize";

// Configuración de Sequelize para conectar la base de datos de mysql :
const db = new Sequelize( 'agenciaviajes', 'root', 'root', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
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
