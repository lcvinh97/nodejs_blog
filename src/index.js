const path = require('path');
const express = require('express');
const morgan = require('morgan');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override');

const sortMiddleware = require('./app/middlewares/SortMiddleware');

const route = require('./routes');
const db = require('./config/db');

// Connect to DB
db.connect();

const app = express();
const port = 3000;

//methodOverride
app.use(methodOverride('_method'));

// Custom middleware
app.use(sortMiddleware);

app.use(express.static(path.join(__dirname, 'public')));
console.log("PATH: ", path.join(__dirname, '/public'));

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
    helpers: require('./helpers/handlebars'),
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views')); // thêm đối số như vậy thì hệ điều hành sẽ tự thêm slash vào
// Route init
route(app);

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
