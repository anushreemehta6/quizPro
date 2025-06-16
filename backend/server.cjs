const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
  const formData = req.body;

  const formattedData = `First Name: ${formData.firstName}, Last Name: ${formData.lastName}, Age: ${formData.age} , Message: ${formData.message}\n`;

  fs.appendFile('contactData.txt', formattedData, (err) => {
    if (err) {
      console.error('Error saving file:', err);
      return res.status(500).send('Server error');
    }
    res.send('Data saved successfully!');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
