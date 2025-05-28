import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

db.sync() // Esto crea las tablas si no existen, según los modelos definidos
  .then(() => console.log("Tablas creadas"))
  .catch((error) => console.log(error));

// Conectar la base de datos
db.authenticate()
  .then(() => console.log("Base de datos conectada"))
  .catch((error) => console.log(error));

// Definir puerto
const port = process.env.PORT || 5500;

// Habilitar pug
app.set("view engine", "pug");

// Obtener el año actual
app.use((req, res, next) => {
  const year = new Date();
  res.locals.actualYear = year.getFullYear();
  res.locals.nombreSitio = "Agencia de Viajes";
  return next();
});

// Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({ extended: true }));

// Agregar router
// .use() es un verbo que va a permitir soporte para todos los demás verbos establecidos en el router
app.use("/", router);

// Definir la carpeta pública
app.use(express.static("public"));

app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto ${port}`);
});
