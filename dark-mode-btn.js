function toggleDarkMode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

// Check if the user's preference for dark mode is stored
const prefersDarkMode = localStorage.getItem('darkMode');

// Set the initial dark mode state based on the stored preference
if (prefersDarkMode === 'true') {
  document.body.classList.add('dark-mode');
}

// Function to toggle dark mode
function toggleDarkMode() {
  // Toggle the dark mode class on the HTML body element
  document.body.classList.toggle('dark-mode');

  // Store the user's preference for dark mode
  const isDarkMode = document.body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);
}
