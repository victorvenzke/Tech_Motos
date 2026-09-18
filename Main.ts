import {Moto} from "./Moto.ts";
import {Cliente} from "./Cliente.ts";
import {Sistema} from "./Sistema.ts";
import prompt from "prompt-sync";

const sistema = new Sistema();
const teclado = prompt ();

const cadastro = teclado ("Já é cliente da TechMotos?: S/N"); 

    switch (cadastro.toUpperCase()) {
        case "S":
        const cpf = teclado("Digite seu CPF: ");

        const clienteEncontrado = sistema.clientes.find(cliente => cliente.cpf === Number(cpf));

        if (clienteEncontrado) {
            console.log(`Bem-vindo, ${clienteEncontrado.nome}!`);
        } else {
            console.log("Cliente não encontrado");
        }

        break;
    
        case "N": 
        const desejaCadastrar = teclado("Deseja fazer o cadastro? S/N: ");
            if (desejaCadastrar.toUpperCase() === "S") {
                const nome = teclado ("Digite seu nome completo: ");
                const cpf = Number(teclado ("Qual o seu numero?"));
                const idade = Number(teclado ("Qual o seu CPF?"));
                const endereco = teclado ("Digite o seu endereço: ");      
                const telefone = teclado("Digite seu telefone: ");             
                const novoCliente = new Cliente(nome, idade, cpf, endereco, telefone); sistema.adicionarCliente(novoCliente);
                console.log("Cadastro feito com sucesso!!");
            } else {
                console.log ("Então vamos prosseguir para o atendimento");
            }
            break;
        }



const marca = teclado("Digite a marca da moto: ");
const modelo = teclado("Digite o modelo da moto: ");
const ano = Number(teclado("Digite o ano da moto: "));
const valor = Number(teclado("Digite o valor da moto: "));
const promocao = teclado("a moto esta em promocao? S/N ").toUpperCase() === "S";      
const placa = teclado("qual a placa? ");
const moto = new Moto(
    marca,
    modelo,  
    ano, 
    valor, 
    promocao, 
    placa); 


sistema.adicionarMoto(moto);
sistema.listarMotos();

// DESCONTO AUTOMÁTICO

if (moto.promocao) {
    moto.aplicarDesconto(10);
    console.log("Foi aplicado 10% de desconto na moto!");
}


// ADICIONA A MOTO AO SISTEMA

sistema.adicionarMoto(moto);

console.log("\n=== MOTO CADASTRADA ===");
sistema.listarMotos();


// TOTAL

console.log("\n=== VALOR TOTAL ===");
console.log("Total: R$ " + sistema.calcularValorTotal());


// STATUS

console.log("\n=== STATUS ===");
sistema.alterarDadosMoto("Enviado");      

console.log("Status do sistema:", sistema.status); 
