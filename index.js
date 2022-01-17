const express = require("express");
const app = express();
const server = require('http').Server(app);

require('dotenv').config();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.enable("trust proxy");

const routes = require('./routes/users');
routes(app);

const port = process.env.PORT || 3000;
//app.listen(port, () => console.log(`listening on port ${port}`));

app.listen(3000).on('error', console.log);

module.exports = {app, server};
