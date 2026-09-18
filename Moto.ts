export class Moto {
    marca: string = "";
    modelo: string = "";
    ano: number = 0;
    valor: number = 0;
    promocao: boolean = true;
    placa: string = "";

    constructor(marca: string, modelo: string, ano: number, valor: number, promocao: boolean, placa: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.valor = valor;
        this.promocao = promocao;
        this.placa = placa;
    }
    aplicarDesconto(percentual: number) {
        this.valor = this.valor - (this.valor * percentual / 100); 

        if (this.promocao) {
            this.aplicarDesconto(10);
        }
    }



    verificarPromocao(): void {
        if (this.promocao === true) {
            console.log("Moto em promoção!")
        } else { console.log("Moto sem desconto.") }
    }

}

