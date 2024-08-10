import express from 'express';
import http from 'http';
//import cors from 'cors';
import { Server } from 'socket.io';


const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 8009;

const io = new Server(server, {
    cors : {
        origin : "http://localhost:5173",
        credentials : true,
        methods : ['GET', 'POST']
    }
});

io.on('connection', (socket) => {
    console.log('User connected ', socket.id);
})


server.listen(port, () => {
    console.log(`Server is running on ${port}`);
})