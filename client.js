const net = require('net');

/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.148',
    port: 50541
  });

  conn.on('connect', (connect) => {
    console.log('I gat dat from serva >>');
  });

  conn.on('connect', () => {
    conn.write('Name: NAT');
  });

  conn.on('data', (data) => {
    console.log('You are done');
  });

  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };