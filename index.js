const cors = require('cors');
const express = require('express');
const passport = require('passport');
const bodyParser = require('body-parser');
const { PORT } = require('./commons/config');


// Create an app instance
const app = express();


// Initialize the middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

// INIT PASSPORT
app.use(passport.initialize());
app.use(passport.session());
require('./commons/passport')(passport);




// Initialize the Base route
app.use('/api',require('./routes/base.route'));


// Start the server
app.listen(PORT,()=>console.log(`Listening on http://localhost:${PORT}`))