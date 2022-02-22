const express = require('express');
const app = express();

app.get('/', (req, res) =>{
    res.header({
        'Content-Type': 'text/plain'
    });
    res.send('<h1>Hello from custom server!<h1>');
});

app.get('/cats', (req, res) =>{
    res.json([
        {
            name: 'Navcho',
            age: 8
        },
        {
            name: 'Garry',
            age: 4
        }
    ])
});

app.listen(3000);