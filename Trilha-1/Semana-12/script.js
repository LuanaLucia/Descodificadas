function alerta(){
    alert("você vai mudar de página");
    window.location.href = 'https://www.google.com/';
}
function calcular(){
    var num1 = Math.random()*10;
    var num2 = Math.random()*10;
    var soma = num1+num2;
    var mult = num1*num2;
    var div = num1/num2;
    var comp = num1 == num2 ? "sao iguais" : "sao diferentes";

    var resultado = document.getElementById("resultado");
    resultado.innerHTML="<br>Soma: " + soma +
                        "<br> Divisão: "+ div +
                        "<br> Multiplicação: " + mult +
                        "<br> Comparação: " + comp;
}