const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the Book Category API');
});

app.get('/categories', (req, res) => {
    console.log('Categories route is working!');

    res.json([
        'Fiction',
        'Science',
        'Technology',
        'History'
    ]);
});

app.get('/about', (req, res) => {
    res.send('This is the Book Category API.');
});

app.listen(3001, () => {
    console.log('Listening on port 3001');
});