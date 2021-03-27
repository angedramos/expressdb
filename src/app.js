const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('path');
const mongoose = require('mongoose');


//connecting to db
mongoose.connect('mongodb://superadmin:procesosModernos@ec2-54-157-157-19.compute-1.amazonaws.com:27017/?authSource=admin&readPreference=primary&appname=MongoDB%20Compass&ssl=false')
.then(db => console.log('DB conectada'))
.catch(err => console.log('err'));    
//Importing Routes
const indexRoutes = require('./routes/index');

//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));

// routes
app.use('/',indexRoutes);


//Starting server 
app.listen(app.get('port'), ()=>{
    console.log(`Server on Port ${app.get('port')}`);
})