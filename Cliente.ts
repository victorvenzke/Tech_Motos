
export class Cliente {
    private _nome: string = "";
    private _cpf: number = 0;
    private _endereco: string = "";
    private _telefone: string = "";


constructor (nome: string, cpf: number, endereco: string, telefone: string){
    this._nome = nome
    this._cpf = cpf
    this._endereco = endereco
    this._telefone = telefone
    }

    
    get nome(): string {
        return this._nome;
    }
    set nome(novoNome: string) {
        this._nome = novoNome;
    }

    get cpf(): number {
        return this._cpf;
    }

    get endereco(): string {
        return this._endereco;
    }
    set endereco(novoEndereco: string) {
        this._endereco = novoEndereco;
    }

    get telefone(): string {
        return this._telefone;
    }
    set telefone(novoTelefone: string) {
        if (novoTelefone.length < 10 || novoTelefone.length > 11) {
            throw new Error("Telefone inválido");
        }
        this._telefone = novoTelefone;
    }
}







