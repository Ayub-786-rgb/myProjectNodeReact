const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');
const blogRoutes = require('./routes/blogRoutes');
const cors = require('cors');

const app = express();

connectDB();

app.use(bodyParser.json());

const corsOptions = {
    origin: '*', 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

app.use('/api/blogs', blogRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
