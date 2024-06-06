function validateLogin() {
    // Obtém os valores do nome de usuário e senha
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Sempre exibe a mensagem de sucesso e redireciona para "index.html"
    alert('Login bem-sucedido!');
    window.location.href = "index.html";
}