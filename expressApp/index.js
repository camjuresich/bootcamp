const express = require('express');
const app = express();
const port = 3000;

// defining paths 
app.get('/', (req, res) => {
    res.send('this is the home page')
})
// using variables in paths
app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params
    res.send(`browsing the ${subreddit} subreddit`)
})
// starting an express server
app.listen(port, () => {
    console.log('listening on port 3000')
})
