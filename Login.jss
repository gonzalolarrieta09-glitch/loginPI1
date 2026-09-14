document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  const messageEl = document.getElementById('loginMessage');

  // Validar que no haya campos vacíos
  if (!email || !password) {
    messageEl.textContent = "Por favor, llena todos los campos.";
    messageEl.style.color = "red";
    return;
  }

  // Traer los usuarios guardados de localStorage (o lista vacía si no hay)
  const users = JSON.parse(localStorage.getItem('users')) || [];

  // Buscar coincidencia
  const foundUser = users.find(u => u.email === email && u.password === password);

  if (foundUser) {
    messageEl.textContent = "¡Bienvenido! Has iniciado sesión correctamente.";
    messageEl.style.color = "green";
    localStorage.setItem('currentUser', JSON.stringify(foundUser));
  } else {
    messageEl.textContent = "El correo o la contraseña son incorrectos.";
    messageEl.style.color = "red";
  }
});
