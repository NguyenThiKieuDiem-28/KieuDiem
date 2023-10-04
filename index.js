const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const connect = require('./config/connect_db');
const locationRoute = require('./routes/location.route')

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

connect();

app.use('/api/v1/location', locationRoute);




const port = 3000 || process.env.PORT;
app.listen(port, () => console.log('Secer running on: http://localhost:3000'));