const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once('open', () => {
    console.log('MongoDB database connection successfully');
})

const usersRoute = require('./routes/users');
const armysRoute = require('./routes/armys');
const unitsRoute = require('./routes/units');

app.use('/users', usersRoute);
app.use('/armys', armysRoute);
app.use('/units', unitsRoute);

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});