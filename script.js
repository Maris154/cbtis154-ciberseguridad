// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

let isDarkMode = true;

themeToggle.addEventListener('click', () => {
  isDarkMode = !isDarkMode;
  html.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  isDarkMode = savedTheme === 'dark';
  html.setAttribute('data-theme', savedTheme);
}

// Home button
const homeBtn = document.getElementById('homeBtn');
homeBtn.addEventListener('click', () => {
  window.location.href = '/';
});

// Module Accordion
const moduleHeaders = document.querySelectorAll('.module-header');
moduleHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const chevron = header.querySelector('.chevron');
    
    if (content.classList.contains('active')) {
      content.classList.remove('active');
      header.classList.remove('active');
    } else {
      content.classList.add('active');
      header.classList.add('active');
    }
  });
});

// Submodule Accordion
const submoduleHeaders = document.querySelectorAll('.submodule-header');
submoduleHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const chevron = header.querySelector('.chevron');
    
    if (content.classList.contains('active')) {
      content.classList.remove('active');
      header.classList.remove('active');
    } else {
      content.classList.add('active');
      header.classList.add('active');
    }
  });
});

// Project Section Accordion
const projectHeader = document.querySelector('.project-header');
if (projectHeader) {
  projectHeader.addEventListener('click', () => {
    const content = document.querySelector('.project-content');
    
    if (content.classList.contains('active')) {
      content.classList.remove('active');
    } else {
      content.classList.add('active');
    }
  });
}

// Options Accordion
const optionHeaders = document.querySelectorAll('.option-header');
optionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    
    if (content.classList.contains('active')) {
      content.classList.remove('active');
    } else {
      content.classList.add('active');
    }
  });
});

// Roles Accordion
const roleHeaders = document.querySelectorAll('.role-header');
roleHeaders.forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    
    if (content.classList.contains('active')) {
      content.classList.remove('active');
    } else {
      content.classList.add('active');
    }
  });
});

// Parcial buttons - placeholder for future navigation
const parcialBtns = document.querySelectorAll('.parcial-btn');
parcialBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    console.log('Navegando al parcial...');
  });
});

console.log('CBTIS 154 - Ciberseguridad loaded successfully');
