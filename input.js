
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  const handleUserInput = () => {
    if ('\u0003') {
      process.exit(); //exit out of game if ctl C is pressed
    }
  };
  stdin.on('data', handleUserInput);
  return stdin;
};

module.exports = {
  setupInput
};