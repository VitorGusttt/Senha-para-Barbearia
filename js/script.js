let senha = document.querySelector('#senha');
let btn = document.querySelector('#pegaSenha');
let contador = 1;
btn.addEventListener('click', (e) =>{
    contador+=1;
    senha.innerHTML = contador;
});