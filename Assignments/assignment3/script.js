const pass = document.getElementById('pass');
document.getElementById('toggle').addEventListener('change', () => {
  pass.type = pass.type === 'password' ? 'text' : 'password';
});