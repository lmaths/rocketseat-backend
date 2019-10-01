const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');


const app = express();
mongoose.connect('mongodb+srv://matheus150797:matheus150797@orministack-k2833.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

//req.query = acessar parametros na url
// req.params = acessar route params (edição e delete)

//req.body = aceessar corpo
app.use(express.json());
app.use(routes);




app.listen(8080);