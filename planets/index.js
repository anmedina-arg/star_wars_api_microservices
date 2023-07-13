const server = require("./src/server");

const PORT = 8003;

server.listen(PORT, () => {
  console.log(`El servicio planets esta escuchando en el puerto ${PORT}`);
});
