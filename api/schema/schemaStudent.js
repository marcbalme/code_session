const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    firstName: {
      type: String,
    },
    birthDate: {
      type: Date,
    },
    inscriptionDate: {
      type: Date,
    },
    licenceType: {
      type: Number,
    },
    sessionDones: {
      type: Array,
    },
    results: {
      type: Array,
    },
  },
  { timestamps: { createdAt: 'created_at' } }
);

module.exports = mongoose.model('Student', studentSchema);
