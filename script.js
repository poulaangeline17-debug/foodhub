function sendMessage() {
  alert("Message sent! We'll contact you soon 💬");
}

function placeOrder() {
  alert("✅ Your order has been placed! Thank you for choosing FoodHub 🍕");
  return false; // Prevent form from refreshing the page
}

const toggle = document.getElementById("darkModeToggle");
if (toggle) {
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggle.textContent =
      document.body.classList.contains("dark-mode") ? "☀️ Light" : "🌙 Dark";
  });
}
