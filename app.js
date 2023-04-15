const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/users.route');

const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/', usersRouter);

// api/users : GET
// api/users/:id : GET
// api/users/ : POST
// api/users/:id : PATCH
// api/users/:id : DELETE

app.get('/', (req, res)=>{
    res.sendFile(__dirname + "/./views/index.html");
});

// rotues error handler
app.use('*', (req, res, next)=>{
    res.status(404).json({
        message: 'route not found!'
    });
});

// server error handler
app.use((err, req, res, next)=>{
    res.status(500).json({
        message: 'system broken!'
    });
});


module.exports = app;
