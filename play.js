const { connect } = require('./client');
console.log('Connecting ...');
connect();

// step 1: added this:
// conn.on('data', (data) => {
//   console.log('I gat dat from serva >>', data)
// })

// step 2: moved this to another JS file: client.js + added this line in the bottom: module.exports = { connect };
/*const net = require('net');

/**
 * Establishes connection with the game server
 */
/*const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.148',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');

  conn.on('data', (data) => {
    console.log('I gat dat from serva >>', data);
  });

  return conn;
};

module.exports = { connect };*/
