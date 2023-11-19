// app.js
const express = require('express');
const bodyParser = require('body-parser');
const authroutes = require('./authroutes.js');
const newsroutes = require('./newsroute.js');

const app = express();
const PORT = 3000; // Change as needed

app.use(bodyParser.json());

app.use('/auth', authroutes);
app.use('/news', newsroutes);

const User = require('./models/models');

app.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Check if the username already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({
        errorMessage: `Username ${username} already exists!`,
        status: false
      });
    }

    // Create a new user
    const newUser = new User({
      username,
      email,
      password
    });

    // Save the user to the database
    await newUser.save();

    res.status(200).json({
      status: true,
      title: 'Registered Successfully.'
    });
  } catch (error) {
    console.error('Error during user registration:', error);
    res.status(500).json({
      errorMessage: 'Internal server error',
      status: false
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
