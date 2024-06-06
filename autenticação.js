document.addEventListener('DOMContentLoaded', (event) => {
    const isAuthenticated = localStorage.getItem('authenticated');
    if (!isAuthenticated) {
        alert('Você precisa fazer login primeiro!');
        window.location.href = 'login.html';
    }
});
