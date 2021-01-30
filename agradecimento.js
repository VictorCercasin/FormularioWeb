window.addEventListener('load', () => {
    const nome = sessionStorage.getItem('nome');
    const telefone = sessionStorage.getItem('telefone');
    const email = sessionStorage.getItem('email');
    const mensagem = sessionStorage.getItem('mensagem');

    console.log(nome);
    document.getElementById('nome').innerHTML = "<b>Nome: </b>" + nome;
    document.getElementById('telefone').innerHTML = "<b>telefone: </b> " + telefone;
    document.getElementById('email').innerHTML = "<b>email: </b> " + email;
    document.getElementById('mensagem').innerHTML = "<b>mensagem: </b> " + mensagem;
})