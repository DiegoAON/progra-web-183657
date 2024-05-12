const commentForm = document.getElementById('comment-form');
const commentList = document.getElementById('comment-list');


const contactForm = document.getElementById('contact-form');


commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const comment = document.getElementById('comment').value;
  
  const commentHTML = `<li>${name}: ${comment}</li>`;
  commentList.innerHTML += commentHTML;
  
  document.getElementById('name').value = '';
  document.getElementById('comment').value = '';
});


contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  alert(`Message sent to website administrators: ${name} (${email}) - ${message}`);
  
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
});