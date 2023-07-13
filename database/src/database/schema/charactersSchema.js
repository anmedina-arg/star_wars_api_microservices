const { Schema } = require("mongoose");

const characterSchema = new Schema({
  _id: String,
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String, //esto despues podria ser un ENUM
  homeworld: { type: String, ref: "Planet" }, //aqui se especifica que estos datos hacen referencia a otro modelo
  films: [{ type: String, ref: "Film" }], //aqui se especifica que estos datos hacen referencia a otro modelo
});

characterSchema.statics.list = async function () {
  return await this.find()
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.get = async function (id) {
  return await this.findById(id)
    .populate("homeworld", ["_id", "name"])
    .populate("films", ["_id", "title"]);
};

characterSchema.statics.insert = async function (character) {
  return await this.create(character);
};

module.exports = characterSchema;
