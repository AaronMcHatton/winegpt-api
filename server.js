const app = require('./app.js')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser');
const router = require('./routes');
const PORT = process.env.PORT || 4200;



app.use(
  cors({
    origin: [
        "*"
    ],
  })
);

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.static('public'));

app.use(router)

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});