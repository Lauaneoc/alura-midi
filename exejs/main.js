var salario;
var aumento;
function calculaSalario(salario, aumento) {
  if (salario <= 1000) {
    aumento = (salario * 15) / 100;
    salario = aumento + salario;
  } else if (salario > 1000 && salario <= 2000) {
    aumento = (salario * 12.5) / 100;
    salario = aumento + salario;
  } else if (salario > 2000) {
    aumento = (salario * 10) / 100;
    salario = aumento + salario;
  } else {
    console.log("Digite um valor de salário")
  }
  return salario
}

calculaSalario(2100, 0);