import express from 'express';

const app = express(); //

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

import concatRoutes from './routes/emplroutes.js';
// const app = express();
app.use(express.json());
app.use('/employees', concatRoutes);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});