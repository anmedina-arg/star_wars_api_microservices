const server = require("./src/server");

const PORT = 8004;

server.listen(PORT, () => {
  console.log(`database service listen on port ${PORT}`);
});
