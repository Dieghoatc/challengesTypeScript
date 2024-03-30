import { test, expect } from "vitest";
import { taxesCalculator, validPassword, bmi } from "./exercises";
// # 1 Valid Password

test("Valid password", () => {
  expect(validPassword("2Fj(jjbFsuj")).toBe("True");
  expect(validPassword("eoZiugBf&g9")).toBe("True");
  expect(validPassword("hola")).toBe("False");
  expect(validPassword("")).toBe("False");
});

// # 2 Taxes calculator

test("Taxes calculator", () => {
  expect(taxesCalculator(18, 1000)).toBe(400);
  expect(taxesCalculator(40, 10000)).toBe(4000);
  expect(taxesCalculator(17, 5000)).toBe(0);
  expect(taxesCalculator(30, 500)).toBe(0);
});

// # 3 Body mass index

test("Calculate Body mass index", () => {
  expect(bmi(44, 1.8)).toBe("Underweight");
  expect(bmi(72, 1.8)).toBe("Normal");
  expect(bmi(73, 1.6)).toBe("OverHeigh");
  expect(bmi(80, 1.55)).toBe("Obece");
  expect(bmi(90, 1.6)).toBe("Extremely Obece");
});
