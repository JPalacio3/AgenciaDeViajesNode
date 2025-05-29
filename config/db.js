import { Sequelize } from "sequelize";
import mysql from "mysql2/promise";

// Importamos la funcionalidad para las variables de entorno
import dotenv from "dotenv";
dotenv.config();

// Crear la base de datos si no existe
const createDatabaseIfNotExists = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root",
  });
  await connection.query(`CREATE DATABASE IF NOT EXISTS agencia_de_viajes`);
  await connection.end();
};

await createDatabaseIfNotExists();

// Configuración de Sequelize para conectar la base de datos de mysql :
const db = new Sequelize(process.env.DB_URL, {
  define: {
    timestamps: false,
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000,
  },
  dialect: "mysql", // Aseguramos que el dialecto sea MySQL
});

const insertInitialData = async () => {
  try {
    const viajes = [
      [
        "Viaje a Canadá",
        "1200",
        "2025-06-01",
        "2025-06-15",
        "destinos_canada.jpg",
        "Disfruta de un increíble viaje a Canadá.",
        "10",
        "viaje-a-canada",
      ],
      [
        "Viaje a Checoslovaquia",
        "1500",
        "2025-07-01",
        "2025-07-15",
        "destinos_checo.jpg",
        "Explora la historia y cultura de Checoslovaquia.",
        "8",
        "viaje-a-checoslovaquia",
      ],
      [
        "Viaje a Grecia",
        "1800",
        "2025-08-01",
        "2025-08-15",
        "destinos_grecia.jpg",
        "Descubre las maravillas de Grecia.",
        "12",
        "viaje-a-grecia",
      ],
      [
        "Viaje a Londres",
        "2000",
        "2025-09-01",
        "2025-09-15",
        "destinos_londres.jpg",
        "Visita la icónica ciudad de Londres.",
        "15",
        "viaje-a-londres",
      ],
      [
        "Viaje a París",
        "2200",
        "2025-10-01",
        "2025-10-15",
        "destinos_paris.jpg",
        "Romance y cultura en París.",
        "10",
        "viaje-a-paris",
      ],
      [
        "Viaje a Río de Janeiro",
        "1700",
        "2025-11-01",
        "2025-11-15",
        "destinos_rio.jpg",
        "Disfruta del carnaval y playas de Río.",
        "20",
        "viaje-a-rio",
      ],
      [
        "Viaje a Roma",
        "1900",
        "2025-12-01",
        "2025-12-15",
        "destinos_roma.jpg",
        "Explora la historia de Roma.",
        "18",
        "viaje-a-roma",
      ],
    ];

    for (const viaje of viajes) {
      await db.query(
        `INSERT INTO viajes (titulo, precio, fecha_ida, fecha_vuelta, imagen, descripcion, disponibles, slug) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
        { replacements: viaje }
      );
    }

    console.log("Registros iniciales insertados en la tabla viajes");
  } catch (error) {
    console.error("Error al insertar registros iniciales:", error);
  }
};

await insertInitialData();

export default db;
