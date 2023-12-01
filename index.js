const express = require('express');
const server = express();
const movies = require('./src/data/movies.json');

server.get('/movies', (req,res) => {
    return res.json(movies)
})
        
server.listen(3003, () => {
    console.log('listening on port 3003')
});