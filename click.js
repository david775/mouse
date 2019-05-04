var se=document.addEventListener("mousedown", presiona);
var mou=document.addEventListener("mousmove",mueve);
var se=document.addEventListener("mouseup", suelta);
var cuadrito=document.getElementById("click");
var papel=cuadrito.getContext("2d");
var x;
var y;
var colorcito="#AFA";
var color = "clack"
dibujarLinea("color", 0, 0, 300, 0, papel);
dibujarLinea("color", 300, 0, 300, 300, papel);
dibujarLinea("color", 300, 300, 0, 300, papel);
dibujarLinea("color", 0, 300, 0, 0, papel);
switch (MouseEvent) {
    case a:
        
        break;

    default:
        break;
}

    function presiona(a){
        console.log("x", a.clientX)
        console.log("y", a.clientY)    
        var clx=a.clientX
        var cly=a.clientY
     
        dibujarLinea(colorcito, clx, cly, 0, 0, papel)
         
    }
    function mueve(d) {
        console.log ("y", d.clientY)
        console.log ("x", d.clientX)        
        var clx=d.clientX
        var cly=d.clientY
        var colorcito="#AFA";
        dibujarLinea(colorcito, clx, cly, 0, 0, papel)
    }
    function suelta(d) {
        console.log ("y", d.clientY)
        console.log ("x", d.clientX)        
        var clx=d.clientX
        var cly=d.clientY
        var colorcito="#AFA";
        dibujarLinea(colorcito, clx, cly, 0, 0, papel)
    }


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
function dibijarmouse() {
    var colorcito="#AFA";
    dibujarLinea(colorcito, clx, cly, 0, 0, papel);
    
}

