//Inicial data
let currentColor = 'black';
let canDrow = false;
let mouseX = 0;
let mouseY = 0;

let screen = document.querySelector("#tela");
let ctx = screen.getContext('2d');

//Events 

document.querySelectorAll('.colorArea .color').forEach(item =>{
    item.addEventListener('click', colorClickEvent);
});

screen.addEventListener('mousedown', mouseDownEvent);
screen.addEventListener('mousemove', mouseMoveEvent);
screen.addEventListener('mouseup', mouseUpEvent);
document.querySelector('.clear').addEventListener('click', clearScreen);


//Funtions
function colorClickEvent(e) {
    let color = e.target.getAttribute('data-color');
    currentColor = color;
    document.querySelector('.color.active').classList.remove('active');
    e.target.classList.add('active');
}

function mouseDownEvent(e){
    canDrow =true;
    mouseX = e.pageX - screen.offsetLeft; //Salva a posição do elemento até o fim da página para a esquerda.
    mouseY = e.pageY - screen.offsetTop; //Salva a posição do elemento até o fim da página para cima.
}

function mouseMoveEvent(e){
    if (canDrow) {
        draw(e.pageX , e.pageY);
    }
}

function mouseUpEvent() {
    canDrow = false;
}

function draw(x ,y) {
    let pointX = x - screen.offsetLeft;
    let pointY = y - screen.offsetTop;

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineJoin = "round";
    ctx.moveTo(mouseX, mouseY);
    ctx.lineTo(pointX, pointY);
    ctx.closePath();
    ctx.strokeStyle = currentColor;
    ctx.stroke();

    mouseX = pointX;
    mouseY = pointY;
}

function clearScreen() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}