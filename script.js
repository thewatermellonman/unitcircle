const canvas = document.getElementById("unitCircle");
const ctx = canvas.getContext("2d");

function drawCircle() {
    ctx.beginPath();
    ctx.arc(300, 300, 150, 0, Math.PI * 2)
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(0, 300);
    ctx.lineTo(600, 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300, 0);
    ctx.lineTo(300, 600);
    ctx.stroke();
}

drawCircle();

canvas.addEventListener("mousemove", function(event) {
    console.log(event.offsetX, event.offsetY);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCircle();
    let dx = event.offsetX - 300;
    let dy = 300 - event.offsetY;
    const angle = Math.atan2(dy, dx);
    console.log(angle);

    let unitX = Math.cos(angle);
    let unitY = Math.sin(angle);

    let pointX = 300 + (unitX * 150);
    let pointY = 300 - (unitY * 150);
    console.log(pointX, pointY);

    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(pointX, pointY);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(300, 300);
    ctx.lineTo(pointX, 300);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(pointX, 300);
    ctx.lineTo(pointX, pointY);
    ctx.stroke();
});