var mou=document.addEventListener("mouseover", escuchar);
var se=document.addEventListener("mousedown", oir);
var cuadrito=document.getElementById("click");
var papel=cuadrito.getContext("2d");

function oir (a){
    console.log(a)
}
function escuchar(d) {
    console.log (d)
}

dibujarLinea("red", 149, 149, 151, 151, papel)

function dibujarLinea(color, x_ini, y_ini, x_final, y_final, lienzo)
{ 
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth=3;
    lienzo.moveTo(x_ini, y_ini);
    lienzo.lineTo(x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();   
}
function dibijarmouse(evento) {
    var colorcito="#AFA";
    dibujarLinea("red", clientX, clientY, 300, 300, papel);
    
}