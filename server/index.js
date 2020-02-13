const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const controllers = require('./controllers');
const cors = require('cors');
const seedDb = require('./db/seed.js');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, "../client/dist")));

app.get('/gallery/:id', controllers.gallery.getOne);

app.get('/gallery', controllers.gallery.getAll);

app.post('/gallery', controllers.gallery.postOne);

app.delete('/gallery/:id', controllers.gallery.deleteOne);

app.put('/gallery/:id', controllers.gallery.updateOne);


app.listen(port, () => console.log(`Server listening on port ${port}!`));
