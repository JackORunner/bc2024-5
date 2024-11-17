const { program } = require('commander');
const path = require('path');
const express = require('express');

const app = express();

program
  .requiredOption('-h, --host <host>', 'address of the server')
  .requiredOption('-p, --port <port>', 'port of the server')
  .requiredOption('-c, --cache <path>', 'path for directory with cache files')
  .parse(process.argv);


const { host, port, cache } = program.opts();

app.get('/', (req, res) => {
    res.send("Hello");
});

const server = app.listen(port, host, () => {
    console.log(`Server is running at http://${host}:${port}`);
    console.log(`Cache directory: ${path.resolve(cache)}`);
});
  