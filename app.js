const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const {render} = require('express/lib/response');

const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

let tasks = ['Buy food', 'Cook food', 'Eat food'];

app.get('/', (req, res) => {
  let today = new Date();
  let options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  };
  console.log(today.toLocaleDateString('en-US', options));

  let day = today.toLocaleDateString('en-US', options);

  res.render('list', {
    dayNow: day,
    tasksejs: tasks,
  });
});

app.post('/', (req, res) => {
  task = req.body.taskInput;
  tasks.push(task);
  res.render('list', {tasksejs: tasks});
});

const port = 3000;
app.listen(port, function () {
  console.log('listening on port ' + port);
});
