/*
Var
// Seção de Declarações das variáveis 
   valor01, valor02, resultado: real
       operador: caractere

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
    escreva("Informe primero valor:")
        leia(valor01)
    escreva("Informe um valor para operação: +, -, *, /:")
        leia(operador)
    escreva("Informe segundo valor:")
        leia(valor02)
    
    se operador = "+" entao
       resultado := valor01 + valor02
    senao
      se operador = "-" entao
       resultado := valor01 - valor02
      senao
         se operador = "*" entao
         resultado := valor01 * valor02
         senao
            se operador = "/" entao
            resultado := valor01 / valor02
            fimse
         fimse
      fimse
    fimse
     escreva("Resultado:", resultado)
*/

var valor01, valor02, resultado, operador;


function acaoBotao() {

   valor01 = prompt("Informe primero valor:")
   operador = prompt("Informe um valor para operação: +, -, *, /:")
   valor02 = prompt("Informe segundo valor:")
        
    
    if (operador == "+"){
       resultado = parseInt(valor01) + parseInt(valor02)
       }else if (operador == "-"){
       resultado = parseInt(valor01) - parseInt(valor02)} 
       else if (operador == "*") {
         resultado = parseInt(valor01) * parseInt(valor02)}
         else if (operador == "/") {
            resultado = parseInt(valor01) / parseInt(valor02)}
       
     document.getElementById("paragrafo").innerText = resultado
   }



/*
function acaoBotao() {
var valor01, valor02, resultado, operador
 
    valor01 = prompt("Informe primero valor:")
    operador = prompt("Informe um valor para operação: +, -, *, /:")
    valor02 = prompt("Informe segundo valor:")
    
    if (operador == "+"){
       resultado = parseInt(valor01) + parseInt(valor02)
    }else if (operador == "-"){
          resultado = parseInt(valor01) - parseInt(valor02)
          }else if (operador == "*"){
                resultado = parseInt(valor01) * parseInt(valor02)
                   }else if (operador = "/"){
                        resultado = parseInt(valor01) / parseInt(valor02)
                   }
     document.getElementById("paragrafo").innerText = resultado
}
*/