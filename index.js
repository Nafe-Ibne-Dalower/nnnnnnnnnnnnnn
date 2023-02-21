const express = require("express")
const app = express()
const bodyParser = require('body-parser');
const fs = require('fs')
const { url } = require("inspector")
const path = require("path")


app.use(bodyParser.urlencoded({extended: true}));
dir = 'awqndjqwdddddddqwddddwqqqqqqqq'
fs.writeFile('data.txt', `module.exports = '${dir}'`, (err) => {
  if (err) throw err;
  console.log('Build time file created successfully!');
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
