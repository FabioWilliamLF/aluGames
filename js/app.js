function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    if (botao.innerText === 'Alugar') {
        botao.classList.add('dashboard__item__button--return');
        botao.innerHTML = 'Devolver';
        imagem.classList.add('dashboard__item__img--rented');
    } else {
        botao.classList.remove('dashboard__item__button--return');
        botao.innerHTML = 'Alugar';
        imagem.classList.remove('dashboard__item__img--rented');
    }
}