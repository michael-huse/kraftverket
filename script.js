// script.js


document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1); // Remove the '#' from href
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust offset for navbar height
        behavior: 'smooth',
      });
    }

    // Close the dropdown on mobile after clicking a link
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  });
});

// Dropdown Toggle for Navbar
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

// Toggle the dropdown menu
if (navbarToggler && navbarCollapse) {
  navbarToggler.addEventListener('click', function () {
    navbarCollapse.classList.toggle('show');
  });

  // Close the dropdown when clicking outside
  document.addEventListener('click', function (e) {
    if (
      !navbarCollapse.contains(e.target) && // Clicked outside the dropdown
      !navbarToggler.contains(e.target) && // Clicked outside the toggler button
      navbarCollapse.classList.contains('show') // Only close if dropdown is open
    ) {
      navbarCollapse.classList.remove('show');
    }
  });
}
  
  // Form Submission Confirmation
  const form = document.querySelector('form');
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission for demo purposes
    alert('Thank you for reaching out! We will get back to you soon.');
    form.reset(); // Clear the form fields
  });
  
 