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
} from "./variables";

// Example 1

test("Calculate total price including IVA ", () => {
  expect(totalPrice(200, 21 / 100)).toBe(242); //0.21 => 21%
});

// Example 2

describe("Calculate the area of a square and perimeter", () => {
  test("measurements", () => {
    expect(measurements(40)).toEqual({ Area: 1600, Perimeter: 160 });
  });
});

// Example 3

test("Should read username and gretting with a Hola followed by username", () => {
  expect(gretting("diego")).toEqual("Hola Diego");
});

// Example 4

const numbers1 = "3,2,4";
const numbers2 = "2,3,6,3,6,7,3,6";

test("Show the average integer number of three numbers", () => {
  expect(middleNumber(numbers1)).toBe(3);
  expect(middleNumber(numbers2)).toBe(4.5);
});

//Example 5

test("Calculate the fuel consumption per kilometer", () => {
  expect(fuelPerKilometer(20, 80)).toBe(0.25);
});

//Example 6

test("Unit conversion, hour and minutes to seconds", () => {
  expect(unitConvert(2, 30)).toBe(9000);
});

// Example 7

const examples = {
  firstValue: 45,
  secondValue: 76,
  threeValue: 98,
  fourValue: 104,
};

describe("Calculate the number of units of a number and tens of the a number", () => {
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

test("Should calculate the quantities of ingredients needed for each peaple", () => {
  expect(quantitiesIngredients(5)).toEqual({ potatoes: "1kg", eggs: 5, onions: "300gr" });
});

// Example 9

test("Exchanging variable values", () => {
  expect(exchanging(1, 2)).toEqual({ varUno: 2, varDos: 1 });
});

// Example 10

test("even and odd", () => {
  expect(evenOdd(2)).toEqual("Par");
  expect(evenOdd(7)).toEqual("Impar");
});
