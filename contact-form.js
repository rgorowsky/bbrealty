document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    if (form) {
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
  
        const formData = {
          Name: event.target.Name.value,
          Email: event.target.Email.value,
          Subject: event.target.Subject.value,
          Comment: event.target.Comment.value,
        };
  
        try {
          const response = await fetch("https://w69geyhoif.execute-api.us-east-2.amazonaws.com/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
  
          const result = await response.json();
          alert(result.message);
        } catch (error) {
          alert("Failed to send message. Please try again.");
        }
      });
    }
  });
  