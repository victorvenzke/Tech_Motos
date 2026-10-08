import { Moto } from "./Moto.ts";

export class Estoque {
    motos: Moto[] = [];

    adicionarMoto(moto: Moto): void {
        this.motos.push(moto);
        return;
    }

    listarMotos(): void {
        if (this.motos.length === 0) {
            console.log("O estoque está vazio.");
        }

        this.motos.forEach((moto) => {
            console.log(
                `${moto.marca} ${moto.modelo} - Placa: ${moto.placa} - Valor: R$ ${moto.valor}`
            );
        });
    }

    calcularValorTotal(): number {
        return this.motos.reduce(
            (total, moto) => total + moto.valor,
            0
        );
    }

    quantidadeMotos(): number {
        return this.motos.length;
    }
};