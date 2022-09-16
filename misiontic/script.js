/* let name = "Daniel";
const PI = 3.1416;
alert("Hola " + name);
let usuario = prompt("Escribe tu usuario");
let password = prompt("Escribe tu contraseña");
console.log(password);
if (usuario == "uninorte" && password == "123") {
  alert("Bienvenido " + usuario);
  console.log("Bienvenido " + usuario);
} else {
  alert("Usuario o contraseña incorrectos");
  console.log("Usuario o contraseña incorrectos");
} */

/* for (let i = 0; i < 5; i++) {
  console.log(i);
} */

/* function suma() {
    let num1 =  parseInt(prompt("Escribe un número"));
    let num2 = parseInt(prompt("Escribe otro número"));
    alert("La suma es " + (num1 + num2));
    //alert(Math.round(25.6));
} */

function calcular() {
    let n1 = document.getElementById('n1').value;
    let n2 = document.getElementById('n2').value;  
    document.getElementById('resultado').innerHTML = "La suma es " + (parseInt(n1) + parseInt(n2));  
}



//suma();