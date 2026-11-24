import { describe, test, expect } from "@jest/globals";
import { Moto } from "../Moto.ts";

describe("Quando aplicar desconto", () => {
    test("deve aplicar desconto de 10%", () => {
        const moto = new Moto("Honda", "CG 160", 2024, 18000, false, "ABC-1234", "Street");

        moto.aplicarDesconto(10);

        expect(moto.valor).toBe(16200);
    });
});
