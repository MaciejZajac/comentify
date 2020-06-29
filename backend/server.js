const express = require('express');
const keys = require('./config/keys');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const opinionRoutes = require('./routes/opinionRoutes');
const app = express();
app.use(express.json());

mongoose.connect(keys.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Content-Type, Authorization'
    );
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// sprawdzenie czy ma użytkownik ma dostęp do treści.
// app.use(isAuth);

// ściezki autoryzacji
// app.use('/api/auth', authRoutes);
app.use('/opinions', opinionRoutes);

app.use((error, req, res, next) => {
    const status = error.statusCode || 500;
    const message = error.message;
    const data = error.data;
    res.status(status).json({ message: message, data: data });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
