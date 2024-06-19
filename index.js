const express = require('express');
const path =require('path')
const db = require('./config/dataBs');
const router = require('./router/router');
const port = 8282;
const app = express();

app.set('view engine', 'ejs');

app.use("uploads", express.static(path.join(__dirname, 'uploads')));
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));

app.use(router);


app.listen(port, (err) => {
     if (!err) {
         db();
          console.log("Server is running on port http://localhost:8282 ")
     }
})

