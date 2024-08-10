import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';


const port = process.env.PORT || 8080;
const app = express();
app.use(cors({
    origin: 'http://localhost:5173',
    credentials : true,
    methods : ['GET','POST']
}));
const server = http.createServer(app);
const io = new Server(server, {
    cors : {
        origin: 'http://localhost:5173',
        credentials : true,
        methods : ['GET','POST']
    }
});

io.on('connection', (socket) => {
    console.log(
        'User connected : ', socket.id
    );
});


server.listen(port, () => {
    console.log(`Server is running on ${port}`);
});