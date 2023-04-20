/*const http = require('http');

const server = http.createServer();
server.on('connection', (socket => {
    console.log('new connection');
}))

server.listen(3000);*/
const express = require('express')
const config = require('./config').config;
const questions = require('./questions')
const app = express();

app.get('/api/questions', (request, response) => {
    response.send(questions);
});
app.listen(config.port, () => {
    console.log(`Server is running at port: ${config.port}`);
})
