const Student = require('../../schema/schemaStudent.js');

async function newStudent(req, res) {
  // Création d'un objet student
  const student = {
    name: req.body.name,
    firstName: req.body.firstName,
    birthDate: req.body.birthDate,
    inscriptionDate: req.body.inscriptionDate,
    licenceType: req.body.licenceType,
  };
  try {
    const new_student = new Student(student);
    await new_student.save();
    return res.status(200).json({
      text: 'Succès',
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
}

exports.newStudent = newStudent;