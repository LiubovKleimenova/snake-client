const net = require("net");
const {IP, PORT} = require("./constants");
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", data => {
    console.log("Server says: ", data);
  });

  conn.on("connect", (name) => {
    console.log("Successfully connected to game server");
  });

  conn.on("connect", () => {
    conn.write("Name: LKS");
  });

  //conn.on("connect", () => {
  //  //conn.write("Move: up");
  //});


  //setTimeout(() => {conn.on("connect", () => {
  //  conn.write("Move: right");
  //})}, 3000)

  
  return conn;
};


module.exports = connect;