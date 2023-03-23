const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

const jump =() => {
    mario.classList.add('jump');

    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = parseInt(window.getComputedStyle(mario).bottom);

    if (pipePosition <= 60 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        mario.src = './imgs/marioP.png';
        mario.style.width ='130px';
        mario.style.marginLeft = '100px';
        mario.style.bottom = '30px';
    
        clearInterval(loop);
    }
},0);

document.addEventListener('keydown', jump);

