import { test, expect } from "vitest";
import { fizBuzzWhoa, lengthNumber } from "./challenges";

// #1 Fizz Buzz Whoa multiples 3 5 7 from 0 to 100

test("Should show multiples for 3, 5, 7", () => {
  expect(fizBuzzWhoa(3)).toBe("Fizz");
  expect(fizBuzzWhoa(5)).toBe("Buzz");
  expect(fizBuzzWhoa(7)).toBe("Whoa");
  expect(fizBuzzWhoa(15)).toBe("FizzBuzz");
  expect(fizBuzzWhoa(21)).toBe("FizzWhoa");
  expect(fizBuzzWhoa(35)).toBe("BuzzWhoa");
  expect(fizBuzzWhoa(105)).toBe("FizzBuzzWhoa");
});

// #2 length number

test("Should return the length of a number", () => {
  expect(lengthNumber(20369)).toBe(5);
  expect(lengthNumber(567893456)).toBe(9);
});
