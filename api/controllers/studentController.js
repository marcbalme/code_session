const student = require('./student/index.js');

module.exports = function (app) {
  app.post('/student', student.newStudent);
  app.get('/student', student.getAllStudent);
  app.get('/student/:id', student.getOneStudent);
  app.delete('/student/:id', student.deleteOneStudent);
};
