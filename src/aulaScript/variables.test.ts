import { describe, expect, test } from "vitest";
import {
  totalPrice,
  measurements,
  gretting,
  middleNumber,
  fuelPerKilometer,
  unitConvert,
  unitsAndTens,
  quantitiesIngredients,
  exchanging,
  evenOdd,
  fizBuzzWhoa,
  lengthNumber,
} from "./variables";

// Example 1

test("#1: Calculate total price including IVA ", () => {
  expect(totalPrice(200, 21 / 100)).toBe(242); //0.21 => 21%
});

// Example 2

describe("#2: Calculate the area of a square and perimeter", () => {
  test("measurements", () => {
    expect(measurements(40)).toEqual({ Area: 1600, Perimeter: 160 });
  });
});

// Example 3

test("#3: Should read username and gretting with a Hola followed by username", () => {
  expect(gretting("diego")).toEqual("Hola Diego");
});

// Example 4

const numbers1 = "3,2,4";
const numbers2 = "2,3,6,3,6,7,3,6";

test("#4: Show the average integer number of three numbers", () => {
  expect(middleNumber(numbers1)).toBe(3);
  expect(middleNumber(numbers2)).toBe(4.5);
});

//Example 5

test("#5: Calculate the fuel consumption per kilometer", () => {
  expect(fuelPerKilometer(20, 80)).toBe(0.25);
});

//Example 6

test("#6: Unit conversion, hour and minutes to seconds", () => {
  expect(unitConvert(2, 30)).toBe(9000);
});

// Example 7

const examples = {
  firstValue: 45,
  secondValue: 76,
  threeValue: 98,
  fourValue: 104,
};

describe("#7: Calculate the number of units of a number and tens of the a number", () => {
  test("With value 1", () => {
    expect(unitsAndTens(examples.firstValue)).toEqual({ tens: 4, units: 5 });
  });
  test("With value 2", () => {
    expect(unitsAndTens(examples.secondValue)).toEqual({ tens: 7, units: 6 });
  });
  test("With value 3", () => {
    expect(unitsAndTens(examples.threeValue)).toEqual({ tens: 9, units: 8 });
  });
  test("With value 104", () => {
    expect(() => unitsAndTens(examples.fourValue)).toThrowError(/^The numbres should be less 100$/);
  });
});

// Example 8

test("#8: Should calculate the quantities of ingredients needed for each peaple", () => {
  expect(quantitiesIngredients(5)).toEqual({ potatoes: "1kg", eggs: 5, onions: "300gr" });
});

// Example 9

test("#9: Exchanging variable values", () => {
  expect(exchanging(1, 2)).toEqual({ varUno: 2, varDos: 1 });
});

// Example 10

test("#10: Even and odd", () => {
  expect(evenOdd(2)).toEqual("Par");
  expect(evenOdd(7)).toEqual("Impar");
});

// #11 Fizz Buzz Whoa multiples 3 5 7 from 0 to 100

test("#11: Should show Fizz Buzz Whoa whith multiples for 3, 5, 7", () => {
  expect(fizBuzzWhoa(3)).toBe("Fizz");
  expect(fizBuzzWhoa(5)).toBe("Buzz");
  expect(fizBuzzWhoa(7)).toBe("Whoa");
  expect(fizBuzzWhoa(15)).toBe("FizzBuzz");
  expect(fizBuzzWhoa(21)).toBe("FizzWhoa");
  expect(fizBuzzWhoa(35)).toBe("BuzzWhoa");
  expect(fizBuzzWhoa(105)).toBe("FizzBuzzWhoa");
});

// #12 length number

test("#12: Should return the length of a number", () => {
  expect(lengthNumber(20369)).toBe(5);
  expect(lengthNumber(567893456)).toBe(9);
});
