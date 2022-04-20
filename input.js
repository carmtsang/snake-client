let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  
  stdin.on('data', handleUserInput);
  

  return stdin;
};

const handleUserInput = key => {

  //movement os the snake
  if (key === 'w') {
    connection.write("Move: up");
  } else if (key === 'a') {
    connection.write("Move: left");
  } else if (key === 's') {
    connection.write("Move: down");
  } else if (key === 'd') {
    connection.write("Move: right");
  };
  //exit out of game
  if (key === '\u0003') {
    process.exit();
  };

// keys for snake to talk
  if (key === 'h') {
    connection.write("Say: Hello")
  } else if (key === 'o') {
    connection.write("Say: Oh no!")
  } else if (key === 'k') {
    connection.write("Say: Omnomnom")
  };
};

module.exports = {
  setupInput
};