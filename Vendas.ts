import { Cliente } from "./Cliente.ts";
import { Moto } from "./Moto.ts";
import { Sistema } from "./Sistema.ts";
import { Estoque } from "./Estoque.ts";

export class Vendas {
    private estoque: Estoque;

    constructor(estoque: Estoque) {
        this.estoque = estoque;
    }
}

motoEstoque(moto: Moto): boolean {
    return this.estoque.motos.some((m) => m.placa === moto.placa);
}

vendasRegistrar(cliente: Cliente, moto: Moto): void {
    const motoEstoque = this.estoquemotos.find((m => m.placa === moto.placa)); {
        if (motoEstoque = true) {
            console.log(`Venda registrada para o cliente ${cliente.nome} com a moto ${moto.marca}, modelo ${moto.modelo} e placa registrada ${moto.placa}`);
        }}}



























BaixaEstoque(moto: Moto): void{
    
    const motoEstoque = this.estoque.motos.find((m) => m.placa === moto.placa);
    if (motoEstoque) {
        const index = this.estoque.motos.indexOf(motoEstoque);
        if (index > -1) {
            this.estoque.motos.splice(index, 1);
        }
    }
    
}