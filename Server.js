import express  from 'express';
import color  from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectdb from './config/db.js';
import authRoutes from './routes/authRoute.js'
import cors from 'cors'
//configure evn
dotenv.config();

//database config
connectdb();

//rest object
const app = express();

//middelwares
app.use(cors());
app.use(express.json())
app.use(morgan('dev'))

// Routes
app.use('/api/v1/auth',authRoutes);

//rest api
app.get('/', (req, res) => {
    res.send({
        message: "Welcome",
    });
    
});
const port = process.env.port||8080;
app.listen(port, () => {
    console.log(`Server running on ${process.env.mode} mode on ${port}`.bgGreen);
});
  