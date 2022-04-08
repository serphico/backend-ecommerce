const express = require('express')
const dotenv = require('dotenv');
const {registerRoute, loginRoute} = require('./routes/routeAccount')
const home = require('./routes/home')
const cart = require('./routes/cart')
const cookieParse = require('cookie-parser')
const session = require('express-session')
const passport = require('passport')

dotenv.config();

const app = express();

app.use(express.urlencoded({extended:true}));

app.use(express.json());

app.use(express.static('public'))

app.use(cookieParse());

app.use(session({

    secret: 'secreto',
    resave: true,
    saveUninitialized: false,
    cookie: {
      maxAge: 100000
    }    
}));

app.use(passport.initialize());

app.use(passport.session());

app.use('/api', home);

app.use('/register', registerRoute);

app.use('/login', loginRoute)

app.use('/cart', cart)

module.exports = app;