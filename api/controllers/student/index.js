const Student = require('../../schema/schemaStudent.js');

async function newStudent(req, res) {
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

async function getAllStudent(req, res) {
  try {
    const students = await Student.find();
    await res.json(students);
    return res.json(students);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function getOneStudent(req, res) {
  const id = req.params.id;
  try {
    const student = await Student.findOne({ _id: id });
    await res.json(student);
    return res.json(student);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

async function deleteOneStudent(req, res) {
  const id = req.params.id;
  try {
    const bin = await Student.deleteOne({ _id: id });
    await res.json(bin);
    return res.json(bin);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

exports.newStudent = newStudent;
exports.getAllStudent = getAllStudent;
exports.getOneStudent = getOneStudent;
exports.deleteOneStudent = deleteOneStudent;
