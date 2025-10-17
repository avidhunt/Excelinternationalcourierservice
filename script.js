// Simple fake tracking function
document.getElementById('trackForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const id = document.getElementById('trackingID').value.trim();
  const result = document.getElementById('trackingResult');

  if (id === "") {
    result.textContent = "⚠ Please enter a tracking number.";
    result.style.color = "red";
  } else {
    result.textContent = ✅ Tracking number ${id} is currently in transit. Estimated delivery: 2 days.;
    result.style.color = "green";
  }
});