const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const route = require('./routes');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));
// console.log("PATH: ", path.join(__dirname, 'public'))

app.use(
  express.urlencoded({
    extended: true,
  }),
); // gửi dữ liệu từ browser lên server dưới dạng html request
app.use(express.json()); // gửi dữ liệu từ browser lên server dưới dạng javascript

// những library trong js để submit: XMLHttpRequest, fetch, axios, AJAX.

// HTTP logger
// app.use(morgan('combined'));

// Template enginee
app.engine(
  'hbs',
  exphbs({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// Route init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
