const express = require('express');
const app = express();
const { getPrimes } = require('./primeCalculator');

app.listen(5000);

app.get('/:number', (req, res) => {
    console.log('Here');
    res.send(getPrimes(req.params.number));
});

