import express from 'express';
import blockRoutes from './routes/block';
import dotenv from 'dotenv';
import connectDB from "./database/db";
import corsMiddleware from "./middlewares/cors";

dotenv.config();

const app = express();

// Middleware to enable CORS
app.use(corsMiddleware);

app.use(express.json());
app.use('/api', blockRoutes);

const PORT = process.env.PORT || 3030;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});