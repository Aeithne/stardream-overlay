const nuvens = document.getElementsByClassName('cloud');
const estrelas = document.getElementsByClassName('star');

const clouds = ['cloud-large', 'cloud-medium', 'cloud-small'];
const speeds = ['cloud-superfast', 'cloud-fast', 'cloud-slow'];
const stars = ['star-large', 'star-medium', 'star-small'];
const twinkle = ['star-superfast', 'star-fast', 'star-slow'];

for (let i = 0; i < nuvens.length; i++) {
  aleatoria = Math.floor(Math.random() * clouds.length);
  nuvens[i].classList.add(clouds[aleatoria]);

  aleatoria = Math.floor(Math.random() * speeds.length);
  nuvens[i].classList.add(speeds[aleatoria]);
}

for (let i = 0; i < estrelas.length; i++) {
    aleatoria = Math.floor(Math.random() * stars.length);
    estrelas[i].classList.add(stars[aleatoria]);

    aleatoria = Math.floor(Math.random() * twinkle.length);
    estrelas[i].classList.add(twinkle[aleatoria]);

    rx = Math.floor(Math.random() * 100);
    ry = 20 + Math.floor(Math.random() * 200);

    estrelas[i].style.left = `${rx}%`;
    estrelas[i].style.top = `${ry}px`;
    estrelas[i].style.position = 'absolute';
  }