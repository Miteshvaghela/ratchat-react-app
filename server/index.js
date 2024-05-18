const express = require('express');
const cors = require('cors');
const axios = require('axios');
const port = process.env.PORT || 8080;
const app = express(cors());


app.get('/', (req, res) => {
    res.send('Node js server is up and running');
})


app.listen(port, () => {
    console.log(`Application is running on ${port}`);
})