const express = require('express');

const app = express();

//req.query = acessar parametros na url
// req.params = acessar route params (edição e delete)

app.put('/users/:id', (req, res) => {
   return res.json({id: req.params.id})  
});

app.listen(8080);