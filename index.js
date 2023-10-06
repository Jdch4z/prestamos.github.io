// Simular una lista de usuarios
const users = [
    { username: 'usuario1', password: 'contraseña1' },
    { username: 'usuario2', password: 'contraseña2' }
];

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Verificar las credenciales del usuario
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        // El usuario ha iniciado sesión correctamente
        alert('Inicio de sesión exitoso');
        // Aquí puedes redirigir al usuario a la página de préstamo de equipos
    } else {
        alert('Nombre de usuario o contraseña incorrectos');
    }
});