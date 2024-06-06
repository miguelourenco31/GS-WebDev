function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    if (username === 'usuario' && password === '123') {
        alert('Login bem-sucedido!');
        window.location.href = "index.html";
    } else {
        errorMessage.textContent = 'Usuário ou senha incorretos!';
        alert('usuario ou senha incorretos!!')
    }
}