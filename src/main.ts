import express from 'express';
import 'dotenv/config';
import cors from 'cors';

const app = express();

// # Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3001;

app.get('/api', (_, res) => {
  res.status(200).json({ message: 'Hello from the server!' });
});

app.listen(PORT, () => {
  console.log('Server is running on port ', PORT);
});
