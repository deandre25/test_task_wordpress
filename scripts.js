document.querySelectorAll('input[name="header-option"]').forEach(function (input) {
  input.addEventListener('change', function () {
    if (this.value === 'header1') {
      document.querySelector('header').classList.remove('header2');
      document.querySelector('header').classList.add('header1');
    } else {
      document.querySelector('header').classList.remove('header1');
      document.querySelector('header').classList.add('header2');
    }
  });
});

document.querySelectorAll('input[name="footer-option"]').forEach(function (input) {
  input.addEventListener('change', function () {
    if (this.value === 'footer1') {
      document.querySelector('footer').classList.remove('footer2');
      document.querySelector('footer').classList.add('footer1');
    } else {
      document.querySelector('footer').classList.remove('footer1');
      document.querySelector('footer').classList.add('footer2');
    }
  });
});

document.querySelectorAll('input[name="sidebar-option"]').forEach(function (input) {
  input.addEventListener('change', function () {
    const sidebar = document.querySelector('.sidebar');
    if (this.value === 'left') {
      sidebar.style.float = 'left';
      document.querySelector('.main-content').style.marginLeft = '220px';
    } else if (this.value === 'right') {
      sidebar.style.float = 'right';
      document.querySelector('.main-content').style.marginLeft = '20px';
    } else {
      sidebar.style.float = 'none';
      document.querySelector('.main-content').style.marginLeft = '20px';
    }
  });
});

document.getElementById('apply-colors').addEventListener('click', function () {
  const backgroundColor = document.getElementById('background-color').value;
  const textColor = document.getElementById('text-color').value;
  document.querySelector('.color-scheme-form').style.backgroundColor = backgroundColor;
  document.querySelector('.color-scheme-form').style.color = textColor;
});

document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); 
  alert('Form submitted!'); 
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
  document.getElementById('antispam').value = '';
});