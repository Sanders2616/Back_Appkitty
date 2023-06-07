const express =require('express');
const morgan=require('morgan');
const app=express();
//Settings
app.set('port',process.env.PORT||3000);
app.set('view engine','ejs');
//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(morgan('dev'));
app.use(require('./routes/personajes.routes'));
module.exports=app;
