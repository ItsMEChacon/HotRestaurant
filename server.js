const express = require('express');
const path = require('path');

const app = express();
const PORT = 3500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservedTables = ['randomdata'];
const waitList = ['declined'];

app.get('/home', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/reserve/:reserve', (req, res) => { 
    const list = req.params.reservedTables
    
    console.log(list)
});

app.listen(PORT, () => console.log (`App listening on PORT ${PORT}`));

