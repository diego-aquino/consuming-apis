import express from 'express';
import cors from 'cors';

import request from './network/request';

const server = express();
server.use(cors());

server.get('/users', async (req, res) => {
    try {
        const users = await request('users');
        return res.json(users);
    } catch (error) {
        console.error(error);
    }
});

server.get('/todos', async (req, res) => {
    try {
        const todos = await request('todos');
        return res.json(todos);
    } catch (error) {
        console.error(error);
    }
});

server.listen(5000);
