const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 4000;

const api = `https://gnews.io/api/v4/top-headlines?token=${process.env.REACT_APP_API_KEY}&lang=en`;

const allowedOrigin = 'https://news-app-abhishek.netlify.app';
const corsOptions = {
    origin: function (origin, callback) {
        if (origin === allowedOrigin) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.redirect('/api');
});
app.get('/api', (req, res) => {
    if (req.headers.referer && req.headers.referer.includes(allowedOrigin)) {
        axios.get(api)
            .then(response => {
                res.send(response.data);
            })
            .catch(err => {
                console.error(err);
            });
    } else {
        res.status(403).send('403: Access Forbidden');
    }
});

app.listen(PORT, () => {
    console.log(`App running on port ${PORT} `);
});
