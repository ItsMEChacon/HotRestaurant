const express = require('express');

const app = express();
const PORT = 3500;


app.get('/', (req, res) => {
    res.send ('Table reservation server live!')
})

app.listen(PORT, () => console.log (`app listening on PORT ${PORT}`));