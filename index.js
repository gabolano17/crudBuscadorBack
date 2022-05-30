const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const ruta = require("./routes/personas");
const db = require("./config/db");

const app = express();

const port = process.env.PORT || 9090;

db.sync()
  .then(console.log("Conexion a la BD exitosa!!!"))
  .catch((err) => console.error("Error", err));

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.use("/personas", ruta);

app.listen(port, () => {
  console.log("Servidor corriendo en el puerto", port);
});
