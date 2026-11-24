import { Moto } from "./Moto.ts";
import { Cliente } from "./Cliente.ts";

export class Sistema {
    // histórico: todas as motos já cadastradas (vendidas e não vendidas)
    motos: Moto[] = [];
    clientes: Cliente[] = [];
    status: string = "Disponível";

    adicionarMoto(moto: Moto) {
        this.motos.push(moto);
    }

    adicionarCliente(cliente: Cliente) {
        this.clientes.push(cliente);
    }

    listarMotos(): number {
        let total = 0;
        for (const moto of this.motos) {
            console.log("Marca:", moto.marca);
            console.log("Modelo:", moto.modelo);
            console.log("Ano:", moto.ano);
            console.log("Valor:", moto.valor);
            console.log("placa:", moto.placa);
            console.log("desconto:", moto.promocao);
            console.log("-------------------");
            total += 1;
        }
        return total;
    }

    listarHistoricoMotos(): number {
        if (this.motos.length === 0) {
            console.log("Nenhuma moto registrada no histórico.");
        }

        let vendidas = 0;
        for (const moto of this.motos) {
            console.log("Marca:", moto.marca);
            console.log("Modelo:", moto.modelo);
            console.log("placa:", moto.placa);
            console.log("Valor:", moto.valor);
            console.log("Situação:", moto.vendida ? "Vendida" : "Em estoque");
            console.log("-------------------");
            if (moto.vendida) vendidas += 1;
        }
        console.log("Vendidas:", vendidas);
        console.log("Em estoque:", this.motos.length - vendidas);
        return this.motos.length;
    }

    alterarDadosMoto(
        placa: string,
        novaMarca?: string,
        novoModelo?: string,
        novoAno?: number,
        novoValor?: number,
        novaPromocao?: boolean,
    ) {
        const moto = this.motos.find((m) => m.placa === placa);
        if (!moto) {
            console.log("Moto não encontrada.");
            return;
        }
        if (novaMarca !== undefined) moto.marca = novaMarca;
        if (novoModelo !== undefined) moto.modelo = novoModelo;
        if (novoAno !== undefined) moto.ano = novoAno;
        if (novoValor !== undefined) moto.valor = novoValor;
        if (novaPromocao !== undefined) moto.promocao = novaPromocao;
        console.log("Dados da moto alterados com sucesso!");
    }

    alterarDadosCliente(cpf: number, novoNome: string, novoEndereco: string, novoTelefone: string) {
        const cliente = this.clientes.find((c) => c.cpf === cpf);
        if (cliente) {
            cliente.nome = novoNome;
            cliente.endereco = novoEndereco;
            cliente.telefone = novoTelefone;
            console.log("Dados do cliente alterados com sucesso!");
        } else {
            console.log("Cliente não encontrado.");
        }
    }

    calcularValorTotal(): number {
        let total = 0;

        for (const moto of this.motos) {
            total += moto.valor;
        }

        return total;
    }
}
