const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

/* Middleware */
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

/* Routes */
const Books = require('./routes/Books')
app.use('/API', Books)

/* PORT */
const {
    PORT = 3001
} = process.env;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})