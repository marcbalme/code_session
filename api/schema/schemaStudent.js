const mongoose = require('mongoose');

const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    inscriptionDate: {
      type: Date,
      required: true,
    },
    licenceType: {
      type: Number,
      required: true,
    },
    sessionDones: {
      type: Array,
    },
    results: {
      type: Array,
    },
    comments: {
      type: Array,
    },
  },
  { timestamps: { createdAt: 'created_at' } }
);

module.exports = mongoose.model('Student', studentSchema);
