function soma(){
    var numero1=parseFloat(document.getElementById("n1").value)
    var numero2=parseFloat(document.getElementById("n2").value)
    var resp = document.getElementById("respostaSoma")
    resp.textContent = numero1 + numero2
}
function subtracao(){
    var numero3=parseFloat(document.getElementById("n3").value)
    var numero4=parseFloat(document.getElementById("n4").value)
    var resp = document.getElementById("respostaSub")
    resp.textContent = numero3 - numero4
}
function multiplicacao(){
    var numero5=parseFloat(document.getElementById("n5").value)
    var numero6=parseFloat(document.getElementById("n6").value)
    var resp = document.getElementById("respostaMult")
    resp.textContent = numero5 * numero6
}