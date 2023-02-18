const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser');
const axios = require('axios');
const app = express();

const posts = {};

app.use(bodyParser.json());

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.listen(4003, () => {
    console.log('Listening on 4003')
})