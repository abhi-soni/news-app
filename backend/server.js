const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 4000;

const api = `https://gnews.io/api/v4/top-headlines?token=${process.env.REACT_APP_API_KEY}&lang=en`;
const allowedOrigin = 'https://domain-info-abhishek.netlify.app';
const corsOptions = {
  origin: allowedOrigin,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
    res.redirect('/api');
});
app.get('/api', (req, res) => {
    axios.get(api)
        .then(response => {
            res.send(response.data);
        })
        .catch(err => {
            console.error(err);
        });
});
app.listen(PORT, () => {
    console.log(`App running on port ${PORT} `);
});
