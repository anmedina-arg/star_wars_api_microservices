const { catchedAsync } = require("../utils");

module.exports = {
  getFilm: catchedAsync(require("./getFilms")),
  createFilm: catchedAsync(require("./createFilms")),
};
