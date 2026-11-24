import { Cliente } from "./Cliente.ts";
import { Moto } from "./Moto.ts";

export class Registro {
    registros: { cliente: Cliente; moto: Moto }[] = [];

    adicionarRegistro(cliente: Cliente, moto: Moto): void {
        this.registros.push({ cliente, moto });
    }

    listarRegistros(): void {
        if (this.registros.length === 0) {
            console.log("Nenhuma venda registrada.");
        }

        this.registros.forEach((registro) => {
            console.log(
                `${registro.cliente.nome} (CPF: ${registro.cliente.cpf}) comprou ${registro.moto.marca} ${registro.moto.modelo} - Placa: ${registro.moto.placa} - Valor: R$ ${registro.moto.valor}`,
            );
        });
    }

    calcularValorTotal(): number {
        return this.registros.reduce((total, registro) => total + registro.moto.valor, 0);
    }

    quantidadeRegistros(): number {
        return this.registros.length;
    }
}
