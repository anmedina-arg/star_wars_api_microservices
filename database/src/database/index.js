//en este index vamos a crear la conexion con la base de datos
const mongoose = require("mongoose");
const { MONGO_URI } = require("../config/envs"); //<-- NO FUNCA EL .ENV

const conn = mongoose.createConnection(MONGO_URI);

module.exports = {
  Character: conn.model("Character", require("./schema/charactersSchema")),
  Film: conn.model("Film", require("./schema/filmsSchema")),
  Planet: conn.model("Planet", require("./schema/planetsSchema")),
};
