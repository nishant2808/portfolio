document.addEventListener('DOMContentLoaded', function () {
  const toggleBtn = document.querySelector('.header-toggle-wrapper');
  const headerMenu = document.querySelector('.header-link-wrapper');
  const bodys = document.body;
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      this.classList.toggle('active');
      headerMenu.classList.toggle('active');
      bodys.classList.toggle('active');

    });
  }
  const currentPath = window.location.pathname.split('/').pop(); 
  const menuLinks = document.querySelectorAll('.header-link-wrapper ul li a');

  menuLinks.forEach(link => {
    const linkPath = link.getAttribute('href');

    if (linkPath === currentPath || (linkPath === 'index.html' && currentPath === '')) {
      link.parentElement.classList.add('current-menu-item'); 
    }
  });
});

document.querySelector('form[name="contact-me"]').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

// Clear previous errors
document.querySelectorAll('.error-message').forEach(el => el.remove());

let isValid = true;

const fields = [
  { id: 'fname', message: 'Enter a first name.' },
  { id: 'lname', message: 'Enter a last name.' },
  { id: 'email', message: 'Enter a valid email.' },
  { id: 'message', message: 'Enter a message.' },
];

fields.forEach(field => {
  const input = document.getElementById(field.id);
  
  if (input && !input.value.trim()) {
    isValid = false;

    const error = document.createElement('div');
    error.className = 'error-message';
    error.innerHTML = `
      <svg class="error-icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" width="16" height="16" aria-hidden="true">
        <path fill-rule="evenodd" d="M9.5,3 C13.084,3 16,5.916 16,9.5 C16,13.084 13.084,16 9.5,16 
          C5.916,16 3,13.084 3,9.5 C3,5.916 5.916,3 9.5,3 Z M9.5,4 
          C6.467,4 4,6.467 4,9.5 C4,12.533 6.467,15 9.5,15 C12.533,15 
          15,12.533 15,9.5 C15,6.467 12.533,4 9.5,4 Z M10,11 L10,12 L9,12 
          L9,11 L10,11 Z M10,7 L10,10 L9,10 L9,7 L10,7 Z"></path>
      </svg> ${field.message}
    `;
    const formGroup = input.closest('.form-groups');
    if (formGroup) {
      formGroup.appendChild(error);
    }
  }
});
const inputFields = document.querySelectorAll('.input-fields');

  inputFields.forEach(field => {
    if (field.value.trim() === '') {
      isValid = false;
      field.style.borderColor = 'red';
    } else {
      field.style.borderBottom = ''; 
    }
  });



  if (isValid) {
    fetch(this.action, {
      method: 'POST',
      body: new FormData(this),
      headers: { 'Accept': 'application/json' }
    })
    .then(response => {
      if (response.ok) {
        const msg = document.getElementById('success-message');
        msg.style.display = 'block';
        this.reset();
        setTimeout(() => {
          msg.style.display = 'none';
        }, 5000);
      } else {
        alert("There was an error sending your message.");
      }
    })
    .catch(() => {
      alert("Something went wrong. Please try again later.");
    });
  }
});







