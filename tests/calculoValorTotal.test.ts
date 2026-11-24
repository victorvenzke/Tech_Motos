import { describe, test, expect } from "@jest/globals";
import { Moto } from "../Moto.ts";
import { Sistema } from "../Sistema.ts";

describe("Quando calcular o valor total", () => {
    test("deve somar o valor de todas as motos cadastradas", () => {
        const sistema: Sistema = new Sistema();
        sistema.adicionarMoto(new Moto("Honda", "CB500", 2020, 25000, true, "ABC1234", "Naked"));
        sistema.adicionarMoto(new Moto("Yamaha", "MT-03", 2022, 30000, false, "DEF5678", "Naked"));

        const resultado = sistema.calcularValorTotal();

        expect(resultado).toBe(55000);
    });
});
