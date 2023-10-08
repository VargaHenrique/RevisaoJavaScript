/*Atividade 1

Crie um programa que solicite ao usuário a sua idade e verifique se ele pode entrar em uma festa 
(idade mínima de 18 anos). Exiba uma mensagem informando se a entrada é permitida ou não.
*/

let nome = prompt("Informe o seu nome"); 
let idade = Number(prompt("informe a sua idade"))

if (idade >= 18){
    alert(`${nome}, você tem ${idade} anos, portanto você pode entrar na festa!`)
    
}else{
    alert(`${nome}, você tem ${idade} anos, infelizmente você ainda é menor para entrar na festa!`)
    
}

/* Atividade 2

Crie um programa que solicite ao usuário o seu peso (em kg) e a sua altura (em metros) e calcule o seu IMC. 
Exiba uma mensagem com o resultado, indicando se o usuário está abaixo do peso, no peso ideal ou acima do peso.*/

let peso = Number(prompt("Informe o seu peso (em kg)"))
let altura = Number(prompt("Informe a sua altura"))

let imc = peso/altura * altura

if(imc < 18.5){
    alert("Abaixo do peso")
} else if(imc >= 18.5 && imc <= 24.9){
    alert("Peso saúdavel")
} else if(imc >= 25 && imc <= 29.9){
    alert("Sobrepeso")
} else if(imc >= 30 && imc <= 34.9){
    alert("Obesidade grau I")
} else if(imc >= 35 && imc <= 39.9){
    alert("Obesidade grau II")
} else if(imc >= 40){
    alert("Obesidade grau III (Obesidade mórbida)")
}

/*Atividade 3

Crie um programa que solicite ao usuário um valor em reais e faça a conversão desse valor para dólares, 
utilizando uma taxa de câmbio fixa. Exiba o valor convertido.
*/

let reais = Number(prompt(`Informe um valor em reias que queira converter para dólares`))

function Convercao(reais){
dólar = 5
valorDolar = reais / dólar

return valorDolar

}

alert(`Reais: ${reais}\nDólares: ${Convercao(reais)}`)


/*Atividade 4

Crie um programa que solicite ao usuário a quantidade desejada de um determinado produto e verifique se 
há quantidade suficiente em estoque. Caso haja, exiba uma mensagem informando a disponibilidade; 
caso contrário, informe que o produto está indisponível.
*/

let quantidadeSuficiente = Number(prompt("Digite a quantidade desejada de um determinado produto?"));

while (true) {
    quantidadeProduto = prompt("Há quantidade suficiente no estoque? (sim ou não)");

    if (quantidadeProduto === "sim") {
        alert("Temos os produtos em estoque");
        break; 
    } else if (quantidadeProduto === "não") {
        alert("Não temos os produtos em estoque");
        break; 
    } else {
        alert("Resposta inválida. Responda com 'sim' ou 'não'.");
    }
}


/*Atividade 5 

Crie um programa que solicite ao usuário as notas de três provas e seus respectivos pesos.
Calcule a média ponderada dessas provas e exiba o resultado.
*/


let pesoProva1 = Number(prompt("Qual o peso da prova 1?"))
let notaProva1 = Number(prompt("Qual sua nota na prova 1?"))

let pesoProva2 = Number(prompt("Qual o peso da prova 2?"))
let notaProva2 = Number(prompt("Qual sua nota na prova 2?"))

let pesoProva3 = Number(prompt("Qual o peso da prova 3?"))
let notaProva3 = Number(prompt("Qual sua nota na prova 3?"))

let mediaPonderada = (((pesoProva1*notaProva1)+(pesoProva2*notaProva2)+(pesoProva3*notaProva3))/(pesoProva1+pesoProva2+pesoProva3))

alert(`A sua média ponderada foi de: ${mediaPonderada}`)


/*Atividade 6

Crie um programa que solicite ao usuário uma lista de compras, 
permitindo que ele digite vários itens separados por vírgula. 
Em seguida, exiba a lista de compras digitada pelo usuário.
*/

let itens = prompt("Digite os itens da lista de compras que queira comprar, separados por vírgula")
let lista = itens.split(',')

for(i = 0; i < lista.length; i++){
   
    alert(lista[i])
}

/*Atividade 7

Crie um programa que solicite ao usuário um login e uma senha. 
Em seguida, verifique se o login e a senha correspondem aos valores pré-definidos. 
Exiba uma mensagem indicando se o login foi bem-sucedido ou não.
*/

let login = prompt("Informe o seu login")
let senha = prompt("Crie uma senha forte")
while(true){
verificarLogin = prompt("Informe o seu login novamente")
verificarSenha = prompt("Digite a senha novamente")

if (login === verificarLogin && senha === verificarSenha) {
    alert("Login bem-sucedido! Bem-vindo, " + login + ".");
    break;
} else if(login !== verificarLogin && senha !== verificarSenha) {
    alert("Login ou senha incorretos. Tente novamente.");
}
}

/*Atividade 8

Crie um programa que solicite ao usuário o valor de um produto e a porcentagem de desconto a ser aplicada.
Calcule o valor do desconto e exiba o valor final do produto com o desconto aplicado.
*/

let preço = Number(prompt("Informe o preço de um produto?"))
let descontoProduto = Number(prompt("Em porcentagem, qual o desconto para o produto?"))

let descontao = preço-(preço*(desconto/100))

alert(`O valor final do ptoduto com desconto será de: ${descontao}`)