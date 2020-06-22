const student = require('./student/index.js');

module.exports = function (app) {
  app.post('/new_student', student.newStudent);
};
