// script.js
document.addEventListener('DOMContentLoaded', () => {
    const username = 'davisdeus';

    fetch(`https://api.github.com/users/${username}`)
        .then(resp => resp.json())
        .then(data => {
            document.getElementById('avatar').src = data.avatar_url;
            document.getElementById('userName').textContent = data.login;
            document.getElementById('repositories').textContent = `Repositórios: ${data.public_repos}`;
            document.getElementById('followers').textContent = `Seguidores: ${data.followers}`;
            document.getElementById('following').textContent = `Seguindo: ${data.following}`;
            document.getElementById('view-profile').addEventListener('click', () => {
                window.location.href = data.html_url;
            });
        })
        .catch(error => {
            console.error('Erro ao buscar dados do GitHub:', error);
        });
});
