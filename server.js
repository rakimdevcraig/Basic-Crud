const express = require('express');
const mongoose = require('mongoose');
//allow us to take requests and get data from the body
//when we send a post request we wanna be able to get the name of that
//post from the request
const bodyParser = require('body-parser');

//any request that goes to api/items to go to that file
const items = require('./routes/api/items')

const app = express();
const cors = require('cors')

//Allow cors
app.use(cors())

//Bodyparser Middleware
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }))

// DB config
const db = require('./config/keys').mongoURI;

//Connect to mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

//anything that goes to /api/items refer to items variable
app.use('/api/items', items)
const port = process.env.Port || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));