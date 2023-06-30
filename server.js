const express=require('express')
const api_routes = require('./routes/api-routes')
const html_routes = require('./routes/html-routes')
const PORT = process.env.PORT || 3001;
// set the port
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(api_routes)
app.use(html_routes)
app.use(express.static('public'));

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);
