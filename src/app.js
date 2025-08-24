import express, { urlencoded } from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();
app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true
}));
app.use(express.json({ limit: '16kb' })); // use to parse JSON bodies
app.use(urlencoded({ extended: true, limit: '16kb' }));  // to parse URL-encoded bodies
app.use(express.static('public'));
app.use(cookieParser());  // to parse cookies from the HTTP Request
export { app }