const express = require('express');
const app = express();
const { getPrimes } = require('./primeNumCalculator');

app.listen(3001);

app.get('/:number', (req, res) => {
    console.log('Here');
    res.send(getPrimes(req.params.number));
});

