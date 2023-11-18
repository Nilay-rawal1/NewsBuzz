// app.js
const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./authroutes');
const newsRoutes = require('./newsroute');

const app = express();
const PORT = 3000; // Change as needed

app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/news', newsRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
