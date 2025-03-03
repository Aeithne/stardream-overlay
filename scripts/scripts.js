const nuvens = document.getElementsByClassName('cloud');
const estrelas = document.getElementsByClassName('star');

const clouds = ['cloud-large', 'cloud-medium', 'cloud-small'];
const speeds = ['cloud-superfast', 'cloud-fast', 'cloud-slow'];
const stars = ['star-large', 'star-medium', 'star-small'];
const twinkle = ['star-superfast', 'star-fast', 'star-slow'];

const positions = [];

const minDistance = 30;

function isTooClose(newX, newY) {
    for (const pos of positions) {
      const distance = Math.sqrt(Math.pow(newX - pos.x, 2) + Math.pow(newY - pos.y, 2));
      if (distance < minDistance) {
        return true; // Estrela muito próxima
      }
    }
    return false; // Estrela não está muito próxima
  }

for (let i = 0; i < nuvens.length; i++) {
  aleatoria = Math.floor(Math.random() * clouds.length);
  nuvens[i].classList.add(clouds[aleatoria]);

  aleatoria = Math.floor(Math.random() * speeds.length);
  nuvens[i].classList.add(speeds[aleatoria]);
}

for (let i = 0; i < estrelas.length; i++) {

    let rx, ry;
    let tooClose;

    do {
        rx = 5 + Math.floor(Math.random() * 90);
        ry = 20 + Math.floor(Math.random() * 220);
        tooClose = isTooClose(rx, ry);
        console.log(tooClose);
    } while (tooClose);
    console.log(tooClose);

    estrelas[i].style.left = `${rx}%`;
    estrelas[i].style.top = `${ry}px`;
    estrelas[i].style.position = 'absolute';

    positions.push({ x: rx, y: ry }); // Armazena a posição da estrela
    
    aleatoria = Math.floor(Math.random() * stars.length);
    estrelas[i].classList.add(stars[aleatoria]);

    aleatoria = Math.floor(Math.random() * twinkle.length);
    estrelas[i].classList.add(twinkle[aleatoria]);
  }