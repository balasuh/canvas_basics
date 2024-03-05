const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const particlesArray = [];

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let isMouseDown = false; // Flag to track mouse press state

window.addEventListener('resize', function (event) {
    if (mouseDown) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
});

// canvas.addEventListener('mousedown', function (event) {
//     isMouseDown = true;
//     // Optionally, start drawing immediately on mouse down
//     mouse.x = event.x;
//     mouse.y = event.y;
//     drawCircle();
// });

const mouse = {
    x: 0,
    y: 0,
}

// canvas.addEventListener('click', function (event) {
//     mouse.x = event.x;
//     mouse.y = event.y;
//     drawCircle();
// })

canvas.addEventListener('mousemove', function (event) {
    mouse.x = event.x;
    mouse.y = event.y;
    // drawCircle();
})

function drawCircle() {
    ctx.fillStyle = 'rgba(255,255,0,0.5)';
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
}


function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
    requestAnimationFrame(animate);
}

animate();