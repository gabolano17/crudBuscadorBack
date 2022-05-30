const db = require("../config/db");
const { DataTypes } = require("sequelize");

const Persona = db.define(
  "personas",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
    },
    apellido: {
      type: DataTypes.STRING,
    },
    mail: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    paranoid: false,
  }
);

module.exports = Persona;
