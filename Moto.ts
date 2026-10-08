export class Moto {
    private _marca: string = "";
    private _modelo: string = "";
    private _ano: number = 0;
    private _valor: number = 0;
    private _promocao: boolean = true;
    private _placa: string = "";

    constructor(marca: string, modelo: string, ano: number, valor: number, promocao: boolean, placa: string) {
        this._marca = marca;
        this._modelo = modelo;
        this._ano = ano;
        this._valor = valor;
        this._promocao = promocao;
        this._placa = placa;
    }

    get marca(): string {
        return this._marca;
    }
    set marca(novaMarca: string) {
        this._marca = novaMarca;
    }

    get modelo(): string {
        return this._modelo;
    }
    set modelo(novoModelo: string) {
        this._modelo = novoModelo;
    }

    get ano(): number {
        return this._ano;
    }
    set ano(novoAno: number) {
        if (novoAno <= 0) {
            throw new Error("Ano inválido");
        }
        this._ano = novoAno;
    }

    get valor(): number {
        return this._valor;
    }
    set valor(novoValor: number) {
        if (novoValor < 0) {
            throw new Error("O valor não pode ser negativo");
        }
        this._valor = novoValor;
    }

    get promocao(): boolean {
        return this._promocao;
    }
    set promocao(novaPromocao: boolean) {
        this._promocao = novaPromocao;
    }

    get placa(): string {
        return this._placa;
    }

    aplicarDesconto(percentual: number): void {
        this._valor = this._valor - (this._valor * percentual / 100);
    }

    verificarPromocao(): void {
        if (this._promocao === true) {
            console.log("Moto em promoção!");
        } else {
            console.log("Moto sem desconto.");
        }
    }
}

