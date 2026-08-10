const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to Home Page!');
});

app.get('/user/:userId', (req, res) => {
    const userId = req.params.userId;
    res.send('User ID: ' + userId);
});

app.get('/search', (req, res) => {
    const term = req.query.term;
    const userId = req.query.userId;

    if (term) {
        res.send('You searched for: ' + term);
    } else if (userId) {
        res.send('You searched for: ' + userId);
    } else {
        res.send('You did not search for anything');
    }
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
