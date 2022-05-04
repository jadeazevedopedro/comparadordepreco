var gas = parseFloat(prompt('Sistema comparador de preço. Digite o valor da Gasolina: '))
var alcool = parseFloat(prompt('Digite o valor do alcool: '))
var fator = gas / alcool
if (fator > 0.7) {
  console.log('A Gasolina é mais vantajosa.')
}
else if (fator < 0.7) {
  console.log('O alcool é mais vantajoso.')
}
if (fator == 0.7) {
  console.log('Ambos valem a pena.')
}
var sn = prompt('Deseja fazer ? [s/n]')
if (sn == "n") {
  console.log("Obrigada até a próxima!")
}
