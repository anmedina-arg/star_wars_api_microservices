//const films = require("./films.json");
const axios = require("axios");

module.exports = {
  list: async () => {
    const result = await axios.get("http://database:8004/Film");
    return result.data;
  },
  create: async () => {
    throw Error("este es el error que traigo desde el index de data");
  },
};
