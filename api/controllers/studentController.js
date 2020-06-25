const student = require('./student/index.js');

module.exports = function (app) {
  app.post('/student', student.newStudent);
};
