const net = require('net');

// establishes a connection with the game server
const connect = () => {
  // conn - the event handler
  const conn = net.createConnection({
    host: '10.0.2.15',
    port: 50541
  });
  
  conn.on('connect', () => {
    console.log('Successfully connected to the game server')
    conn.write('Name: CBT');
  });

  conn.on('connect', () => {
    setTimeout(() => {
      conn.write('Move: up')
      setTimeout(() => {
        conn.write('Move: left')
      }, 50);
    }, 50);
  });

  conn.on('connect', () => {
    setTimeout(() => {
      conn.write('Move: up')
      setTimeout(() => {
        conn.write('Move: left')
      }, 50);
    }, 50);
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