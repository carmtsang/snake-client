let connection;
const { KEY_MAPPING } = require("./constants");

const setupInput = conn => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);
  
  return stdin;
};

const handleUserInput = key => {
  //keys for movement and messages specified in KEY_MAPPING
  for (const button in KEY_MAPPING) {
    if (key === button) {
      return connection.write(KEY_MAPPING[button]);
    }
  };

  //exit out of game
  if (key === '\u0003') {
    process.exit();
  };
}
  
module.exports = {
  setupInput
};