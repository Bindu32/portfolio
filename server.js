const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(bodyParser.json());

// Contact endpoint
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  // Transporter (example using Gmail SMTP, you can switch to other services)
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "bindusrimajji135@gmail.com",       // replace with your email
      pass: "rtlg eaey czwl okqu"           // use App Password, not your real password
    }
  });

  const mailOptions = {
    from: email,
    to: "bindusrimajji135@gmail.com",           // where you want to receive messages
    subject: `New message from ${name}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ message: "Message sent successfully!" });
  } catch (error) {
  console.error("❌ Error sending mail:", error);
  res.status(500).json({ message: "Failed to send message.", error: error.message });
}

});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get("/", (req, res) => {
  res.send("🚀 Backend is running!");
});
