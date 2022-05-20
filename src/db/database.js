const pg = require('pg');

const client = new pg.Client({
    user: 'mts',
    host: 'localhost',
    database: 'quatropatas',
    password: 'urubu100',
    port: 5432
});

client.connect();

client.query('SELECT * FROM company', (err, res) => {
    if(!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    client.end
});

module.exports = client;