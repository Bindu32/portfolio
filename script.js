document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  fetch("/send", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, message })
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      document.getElementById("formStatus").innerText = "✅ Message sent successfully!";
      e.target.reset();
    } else {
      document.getElementById("formStatus").innerText = "❌ Failed to send message.";
    }
  })
  .catch(() => {
    document.getElementById("formStatus").innerText = "❌ Something went wrong.";
  });
});
