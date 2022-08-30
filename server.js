const express = require('express');
const app = express();
const { getPrimes } = require('./primeCalculator');
const cors = require('cors');

app.listen(5000);

app.use(cors());


app.get('/:number', (req, res) => {
    console.log('Here');
    res.send(getPrimes(req.params.number));
});

