import {Moto} from "./Moto.ts";
import {Cliente} from "./Cliente.ts";
import {Sistema} from "./Sistema.ts";
import { Estoque } from "./Estoque.ts";
import prompt from "prompt-sync";

const sistema = new Sistema();
const estoque = new Estoque(sistema.motos);
const teclado = prompt();

console.log("\n==============================");
console.log("BEM-VINDO À TECH MOTOS");
console.log("==============================\n");

console.log("\n==============================");
console.log("MENU PRINCÍPAL");
console.log("==============================\n");

console.log ("1 - Cadastro de Clientes")
console.log ("2 - Cadastro de Motos")
console.log ("3 - Buscar Motos")
console.log ("4 - Sair" )

const menu = teclado("Escolha uma opção: ");

console.log("==============================\n");

    
    switch (menu.toUpperCase()){

        case "1": {
            const cadastro = teclado("Já cliente da Tech Motos? (S/N):  ");
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
                const cpf = Number(teclado ("Qual o seu CPF?"));
                const endereco = teclado ("Digite o seu endereço: ");      
                const telefone = teclado("Digite seu telefone: ");             
                const novoCliente = new Cliente(nome, cpf, endereco, telefone, false); 
                sistema.adicionarCliente(novoCliente);
                console.log("Cadastro feito com sucesso!!");
                break;
            } else {
                console.log ("Então vamos prosseguir para o atendimento");
                break;
            }}}
        case "2": {
            console.log("1 - Adicionar Moto")
            console.log("2 - Alterar Moto")
            console.log("3 - Excluir Moto")
            console.log("4 - Voltar")
        
            const opcao = teclado ("Escolha uma opção: ")

            switch (opcao.toUpperCase())
            
            {
    case "1": {
        const marca = teclado("Digite a marca da moto: ");
        const modelo = teclado("Digite o modelo da moto: ");
        const ano = Number(teclado("Digite o ano da moto: "));
        const valor = Number(teclado("Digite o valor da moto: "));
        const promocao = teclado("a moto esta em promocao? S/N ").toUpperCase() === "S";
        const placa = teclado("qual a placa? ");

        const moto = new Moto(marca, modelo, ano, valor, promocao, placa);

        if (moto.promocao) {
            moto.aplicarDesconto(10);
            console.log("Foi aplicado 10% de desconto na moto!");
        }

        sistema.adicionarMoto(moto);
        console.log("\n=== MOTO CADASTRADA ===");
        sistema.listarMotos();
        break;
    }

    case "2":
        // Alterar Moto (vai usar sistema.alterarDadosMoto)
        break;

    case "3":
        // Excluir Moto
        break;

    case "4":
        console.log("Voltando...");
        break;

    default:
        console.log("Opção inválida.");
}}}


// TOTAL

console.log("\n=== VALOR TOTAL ===");
console.log("Total: R$ " + sistema.calcularValorTotal());


// STATUS

console.log("\n=== STATUS ===");   

console.log("Status do sistema:", sistema.status); 


