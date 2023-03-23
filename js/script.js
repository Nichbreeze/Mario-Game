const mario = document.querySelector('.mario');
const bug = document.querySelector('.bug');

const jump =() => {
mario.classList.add('jump');

setTimeout(() => {

    mario.classList.remove('jump');
}, 500);

}
const loop = setInterval(() =>{
console.log('loop')

    const bugPosition = bug.offsetLeft;
    const marioPosition = +window.getComputerStyle(mario).bottom.replace('px','');

if (bugPosition <= 120 && bugPosition > 0 && marioPosition < 80)
{
    bug.style.animation = 'none';
    bug.style.left = '${bugPosition}px';

    mario.style.animation = 'none';
    mario.style.bottom = '${marioPosition}px';

    mario.src = './imgs/gameover.png';
    mario.style.width ='75px';
    mario.style.marginLeft = '75px';

    clearInterval(loop);
}

}, 10);

document.addEventListener('keydown', jump);
