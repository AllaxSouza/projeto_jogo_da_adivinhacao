
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random()*10)
let xAttempts = 1


btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetclick)
document.addEventListener('keydown',function(e){
  if(e.key == 'Enter' && screen1.classList.contains('hide')){
    handleResetclick()
  }

})

function handleTryClick(event){
event.preventDefault()

const inputNumber = document.querySelector("#inputNumber")



if(Number(inputNumber.value) == randomNumber) {
  togglescreen()
  screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
} else if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 ||!Number(inputNumber.value) && Number(inputNumber.value)!=0){
  alert("Por favor insira um número de 0 a 10!")
}

inputNumber.value = ""
 xAttempts++
}

function handleResetclick(){
  togglescreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random()*10)
}

function togglescreen(){
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
