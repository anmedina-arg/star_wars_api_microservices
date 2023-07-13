const { ClientError } = require("../utils/error");

module.exports = (req, res, next) => {
  const { title } = req.body;
  if (title) {
    return next();
  } else {
    throw new ClientError("falta el titulo de la peli", 401);
  }
};
