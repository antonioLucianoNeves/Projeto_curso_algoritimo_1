/*escreval("Informe o nome do aluno:")
leia(nome)
escreval("Informe nota 01:")
leia(nota01)
escreval("Informe nota 02:")
leia(nota02)

media := (nota01 + nota02) / 2
se media >= 5 entao
  escreval("Aprovado!")
senao
  escreval("Reprovado!")
fimse
*/

var nome, nota01, nota02, media;

nome = prompt("Informe o nome do aluno:");
nota01 = prompt("Informe nota 01:");
nota02 = prompt("Informe nota 02:");

media = (nota01 + nota02) / 2;


if (media >= 5)
   alert("Aprovado!" + nome);
else
   alert("Reprovado" + nome);   