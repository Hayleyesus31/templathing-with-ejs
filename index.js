  const express = require('express');
const app = express();
const port = 3000;

app.set("view engine","ejs");

//this will allow us to serve up static files, CSS, images & JS
app.use(express.static(__dirname));

app.get('/', (reg, res) => {
let title = "Home";
res.render("pages/index", {"title":title});
//res. send( 'Home Page');
});

app.get('/about', (reg, res) => {
let title = "About Page";
res.render("pages/about", {"title":title});
});

app.listen(port, ( ) => {
console.log(`Example app listening on port ${port}`);
});
