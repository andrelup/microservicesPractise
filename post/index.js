const express = require('express');
const { randomBytes } = require('crypto');
const bodyParser = require('body-parser')
const app = express();

const posts = {};

app.use(bodyParser.json());

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex');
    const { title } = req.body
    post[id] = {
        id, title
    }
    res.status(201).send(post);
});

app.listen(4000, () => {
    console.log('Post Listening on 4000');
});