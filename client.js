const net = require('net');
const { IP, PORT } = require('./constants');

// establishes a connection with the game server
const connect = () => {
  // conn - the event handler
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  
  conn.on('connect', () => {
    console.log('Successfully connected to the game server');
    conn.write('Name: CBT');
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  return conn;
};


module.exports = {
  connect
};