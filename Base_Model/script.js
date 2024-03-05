const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const particlesArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

const mouse = {
    x: 0,
    y: 0,
}

// canvas.addEventListener('click', function (event) {
//     mouse.x = event.x;
//     mouse.y = event.y;
//     drawCircle();
// })

// canvas.addEventListener('mousemove', function (event) {
//     mouse.x = event.x;
//     mouse.y = event.y;
//     drawCircle();
// })

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width; // Random 'x' coordinate between 0 and canvas width
        this.y = Math.random() * canvas.height; // Random 'y' coordinate between 0 and canvas height
        this.size = Math.random() * 5 + 1;
        this.speedX = Math.random() * 2 - 1; // A random number between +1 and -1
        this.speedY = Math.random() * 2 - 1; // A random number between +1 and -1
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
    }

    draw() {
        ctx.fillStyle = 'pink';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function init() {
    for (let i = 0; i < 100; i++) {
        particlesArray.push(new Particle());
    }
}

init();

function handleParticles() {
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles()
    requestAnimationFrame(animate);
}

animate();