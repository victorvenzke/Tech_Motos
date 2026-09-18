import { Moto } from "../src/Moto";

test("deve aplicar desconto de 10%", () => {
        const moto = new Moto(
            "Honda",
            "CG 160",
            2024,
            18000,
            false,
            "ABC-1234"
        );