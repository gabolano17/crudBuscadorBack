const ruta = require("express").Router();
const Persona = require("../models/Persona");

ruta.get("/", (req, res) => {
  Persona.findAll().then((result) => res.json(result));
});

ruta.get("/:id", (req, res) => {
  const id = req.params.id;
  Persona.findByPk(id).then((result) => res.json(result));
});

ruta.post("/", (req, res) => {
  Persona.create({
    nombre: req.body.nombre,
    apellido: req.body.apellido,
    mail: req.body.mail,
  }).then((result) => res.json(result));
});

ruta.put("/:id", (req, res) => {
  const id = req.params.id;
  const data = req.body;
  Persona.findByPk(id).then((result) =>
    result.update(data).then((updt) => res.json(updt))
  );
});

ruta.delete("/:id", (req, res) => {
  const id = req.params.id;
  Persona.destroy({
    where: { id: id },
  }).then((result) => res.json(result));
});

module.exports = ruta;
