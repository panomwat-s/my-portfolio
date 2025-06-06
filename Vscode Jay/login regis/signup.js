document.getElementById('SingupForm').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const message = document.getElementById('message');

  if (email === '' || password === '') {
    message.style.color = 'red';
    message.textContent = 'กรุณากรอกข้อมูลให้ครบทุกช่อง';
  } else {
    message.style.color = 'green';
    message.textContent = 'เข้าสู่ระบบสำเร็จ!';
  }
});
