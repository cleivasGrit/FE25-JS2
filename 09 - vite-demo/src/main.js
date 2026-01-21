import { animate } from "animejs";


animate('h1', {
  borderRadius: '50%',
  rotate: 360,
  loop: true,
  duration: 2000
});

console.log('test')

// Bilden ligger i mappen public. Vi behöver alltså inte en relativ sökväg. 
document.querySelector('img').src= '/sun.jpg'