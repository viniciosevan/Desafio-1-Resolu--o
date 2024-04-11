var setaDireita = window.document.getElementById("seta-direita")
var number8 = document.getElementById("number8");
var number2 = document.getElementById("number2");
var number4 = document.getElementById("number4");
var setaEsquerda = window.document.getElementById("seta-esquerda")

function R1() {
  number8.style.display = "none";
  number4.style.display = "flex";
setaDireita.style = "display none"
  setaEsquerda.style = "display:flex; margin-top 100px"

}

function R2(){
    number8.style = "display: flex"
    number4.style = "display: none"
    setaDireita.style = "display flex"
  setaEsquerda.style = "display:none margin-top 100px"
}

