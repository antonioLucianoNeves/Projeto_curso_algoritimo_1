/*
Var
// Seção de Declarações das variáveis 
    nome: caractere
    numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreval("Informe seu nome:")
    leia(nome)
    escreval("Informe numero:")
    leia(numero)
    
    escreval(nome, ":", numero)
*/

var nome, numero;

nome = prompt("Informe seu nome:");
numero = prompt("Informe numero:");

document.getElementById("paragrafo").innerText = nome + " : " + numero;