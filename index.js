const aedes = require("aedes")();
const httpServer = require("http").createServer((request, response) => {
  response.end("hello");
});
const ws = require("websocket-stream");
const port = process.env.PORT || 80;

ws.createServer({ server: httpServer }, aedes.handle);

httpServer.listen(port, () => {
  console.log("websocket ", port);
});
