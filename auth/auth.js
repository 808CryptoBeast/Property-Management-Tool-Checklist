// script.js

document.addEventListener('DOMContentLoaded', function () {
  const registerForm = document.getElementById('register-form');
  const loginForm = document.getElementById('login-form');

  // Handle registration form submission
  registerForm.addEventListener('submit', function (event) {
      event.preventDefault();
      
      // Validate form data
      const username = registerForm.elements['username'].value;
      const email = registerForm.elements['email'].value;
      const password = registerForm.elements['password'].value;
      const confirmPassword = registerForm.elements['confirm-password'].value;
      
      if (!username || !email || !password || !confirmPassword) {
          alert('Please fill out all fields.');
          return;
      }

      if (password !== confirmPassword) {
          alert('Passwords do not match.');
          return;
      }

      // Mock registration logic (logging data to console)
      console.log('Registration Data:', { username, email, password });
      
      // Optionally, you can redirect to a login page or display a success message
      // window.location.href = 'login.html';
  });

  // Handle login form submission
  loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Validate form data
      const username = loginForm.elements['username'].value;
      const password = loginForm.elements['password'].value;
      
      if (!username || !password) {
          alert('Please fill out all fields.');
          return;
      }

      // Mock login logic (logging data to console)
      console.log('Login Data:', { username, password });

      // Optionally, you can redirect to a dashboard page or display a success message
      // window.location.href = 'dashboard.html';
  });
});
