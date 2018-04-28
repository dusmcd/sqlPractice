const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const { Student, Teacher } = require('./models');
const layout = require('./views/layout');

app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/teachers', require('./routes/teachers'));

app.get('/', (req, res) => {
  res.send(layout('Testing 123'));
});

async function init() {
  await Teacher.sync({ force: true });
  await Student.sync({ force: true });
  app.listen(8080, () => {
    console.log('server is listening...');
  });
}

init();
