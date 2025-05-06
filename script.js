document.getElementById('darkModeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  // Change the icon based on dark mode state
  const icon = document.getElementById('darkModeToggle');
  if (document.body.classList.contains('dark-mode')) {
    icon.textContent = '🌞'; // Sun icon for light mode
  } else {
    icon.textContent = '🌙'; // Moon icon for dark mode
  }
});

const colorButtons = document.querySelectorAll('.color-btn');
colorButtons.forEach(button => {
  button.addEventListener('click', () => {
    document.documentElement.style.setProperty('--primary-color', button.dataset.color);
  });
});

function toggleDetails(product) {
  product.classList.toggle('active');
}
// Get all color buttons
const colorBtns = document.querySelectorAll('.color-btn');

// Add event listeners to color buttons
colorBtns.forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove 'selected' class from all buttons
    colorBtns.forEach(button => button.classList.remove('selected'));

    // Add 'selected' class to the clicked button
    this.classList.add('selected');

    // Update the primary color of the site (optional)
    document.documentElement.style.setProperty('--primary-color', this.dataset.color);
  });
});
