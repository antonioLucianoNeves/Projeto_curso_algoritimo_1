function acaoBotao() {
    
var nome, idade, limite, contador

limite = prompt("Digite a quantidade de vezes que vai ser verificado a idade:")
contador = 0
while (contador < limite){ 
    nome = prompt("Qual o seu nome:")
    idade = prompt("Qual a sua idade:")
    if (idade > 18)
        document.getElementById("paragrafo").innerHTML = nome + "Voce é maior de idade"
    else
        document.getElementById("paragrafo").innerHTML = nome + "Voce é menor de idade"
      
    contador++ //Se não conlocar a instrução do contador o laço fica infinito
 }
}