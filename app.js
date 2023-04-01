const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const {render} = require('express/lib/response');
const date = require(`${__dirname}/date.js`);

console.log(date.getDay());

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

let tasks = [];
let worktasks = [];

app.get('/', (req, res) => {
  res.render('list', {
    titleejs: date.getDate(),
    tasksejs: tasks,
    path: '/',
  });
});

app.post('/', (req, res) => {
  task = req.body.taskInput;

  if (req.body.list == 'work') {
    worktasks.push(task);
    res.redirect('/work');
  } else {
    tasks.push(task);
    res.redirect('/');
  }
});

app.get('/work', (req, res) => {
  res.render('list', {titleejs: 'Work List', tasksejs: worktasks, path: '/work'});
});

app.get('/about', (req, res) => {
  res.render('about');
});

const port = 3000;
app.listen(port, function () {
  console.log(`listening on port ${port}`);
});
