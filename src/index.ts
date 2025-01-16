import express from 'express';
import blockRoutes from './routes/block';
import dotenv from 'dotenv';
import connectDB from "./database/db";

dotenv.config();

const app = express();

// Middleware to enable CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use(express.json());
app.use('/api', blockRoutes);

const PORT = process.env.PORT || 3030;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});