const express = require('express');
const Register = require('../models/registerModel');
const router = express.Router();
router.post('/', async (req, res) => {
  const {id}=req.body;
  try {
    const student=await Register.findById(id);
    if (student) {
        res.json({
            name: student.name,
            email: student.email,
            courses: student.courses,
            p1:student.phoneNumber1,
            dob:student.dateOfBirth,
          });
    } else {
      res.status(404).json({error: 'Student not found' });
    }
  } 
  catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
