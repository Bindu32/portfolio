const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Contact Form Route
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  console.log('Received contact form:', name, email, message);

  // You can also send emails or store in DB here

  res.status(200).json({ success: true, message: 'Message sent successfully!' });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
