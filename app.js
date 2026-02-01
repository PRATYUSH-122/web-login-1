const express = require('express');
const path = require('path');
const app = express();

app.use(express.static('public')); // Static files ke liye

const pages = ['home', 'about', 'services', 'contact'];

pages.forEach(page => {
    app.get(`/${page === 'home' ? '' : page}`, (req, res) => {
        res.sendFile(path.join(__dirname, `views/${page}.html`));
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
