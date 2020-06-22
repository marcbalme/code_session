const account = require('./account/lib.js');
const student = require('./student/index.js');

module.exports = function (app) {
  app.post('/login', account.login);
  app.post('/signup', account.signup);
  app.post('/new_student', student.newStudent);
};
