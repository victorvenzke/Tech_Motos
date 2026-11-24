import { Cliente } from "./Cliente.ts";
import { Moto } from "./Moto.ts";
import { motoEstoque } from "./Estoque.ts";
import { Registro } from "./Registro.ts";

export class Vendas {
    private estoque: motoEstoque;
    private registro: Registro;

    constructor(estoque: motoEstoque, registro: Registro) {
        this.estoque = estoque;
        this.registro = registro;
    }

    motoEstoque(moto: Moto): boolean {
        return this.estoque.motos.some((m) => m.placa === moto.placa);
    }

    vendasRegistrar(cliente: Cliente, moto: Moto): void {
        if (!this.motoEstoque(moto)) {
            console.log("Moto não disponível no estoque.");
            return;
        }

        this.registro.adicionarRegistro(cliente, moto);
        this.BaixaEstoque(moto);
        console.log(
            `Venda registrada para o cliente ${cliente.nome} com a moto ${moto.marca}, modelo ${moto.modelo} e placa registrada ${moto.placa}`,
        );
    }

    BaixaEstoque(moto: Moto): void {
        const motoEstoque = this.estoque.motos.find((m) => m.placa === moto.placa);
        if (motoEstoque) {
            motoEstoque.vendida = true;
            const index = this.estoque.motos.indexOf(motoEstoque);
            if (index > -1) {
                this.estoque.motos.splice(index, 1);
            }
        }
    }
}
