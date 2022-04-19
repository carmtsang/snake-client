const { connect } = require('./client')

console.log('Connecting ...');
connect();

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();

  stdin.on('data', handleUserInput);
  const handleUserInput = () => {
    if (key === '\u0003') {
      process.exit();
    }
  };

  return stdin;
};
