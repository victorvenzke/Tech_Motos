import { describe, test, expect } from "@jest/globals";
import { Moto } from "../Moto.ts"
import { Sistema } from "../Sistema.ts"
 

describe('Quando listar motos', () => {

    test('Deve listar todas motos cadastradas', () => {
        // cenário
        const sistema: Sistema = new Sistema();
        const moto: Moto = new Moto("Honda", "CB500", 2020, 25000, true, "ABC1234");
        sistema.adicionarMoto(moto);

        // executando a ação
        const resultado = sistema.listarMotos();

        // validar resultado
        expect(resultado).toBe(1);
    })
});