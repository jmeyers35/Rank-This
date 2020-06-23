var express = require('express');
var mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.SERVER_PORT || 3000;
const app = express();

mongoose.connect(process.env.MONGO_URL);
mongoose.set('debug', true);

app.use(express.json());
app.use(require('morgan')('dev'));

userRouter = require('./routes/users');
app.use(userRouter);
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => console.log(`Server starting on port ${port}`))