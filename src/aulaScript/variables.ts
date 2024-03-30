// Example 1: Calculate toal price including IVA
export function totalPrice(price: number, iva: number) {
  return price + price * iva;
}

// Example 2: Calculate the area of a square and perimeter

export function measurements(side: number) {
  function areaF(side: number) {
    return Math.pow(side, 2);
  }
  let area = areaF(side);
  let perimeter = side * 4;
  return { Area: area, Perimeter: perimeter };
}

//Example 3: Read username and gretting with a Hola followed by username
export function gretting(userName: string) {
  const camelCaseUsername = userName.charAt(0).toUpperCase() + userName.slice(1);
  return `Hola ${camelCaseUsername}`;
}

// Example 4 Average integer number of three numbers when si string
export function middleNumber(listNumbers: string) {
  const convertToArray = listNumbers.split(",").map(function (number) {
    return parseInt(number, 10);
  });
  const sumArray = convertToArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const average = sumArray / convertToArray.length;
  return average;
}

//Example 5 Calculate the fuel consumption per kilometer
export function fuelPerKilometer(fuel: number, kilometer: number) {
  return fuel / kilometer;
}

// Example 6 Unit conversion, hour and minutes to seconds
export function unitConvert(hour: number, minute: number) {
  return hour * 60 * 60 + minute * 60;
}

// Example 7: Calculate the number of units of a number and tens of tha one number

export function unitsAndTens(number: number) {
  if (number < 100) {
    let quotient = Math.floor(number / 10);
    let units = number - quotient * 10;
    return { tens: quotient, units: units };
  }
  throw new Error("The numbres should be less 100");
}

// Example 8: Calculate the quantities of ingredients needed for each peaple

export function quantitiesIngredients(people: number) {
  const potatoesTortilla = 200;
  const onionsTortilla = 300;
  const kilo = 1000;
  const eggs = 5;
  let potatoes = potatoesTortilla * people;
  let kiloPotatoes = potatoes / kilo;
  let eggsTortilla = (potatoes * eggs) / kilo;
  let onions = (onionsTortilla * potatoes) / kilo;
  return { potatoes: `${kiloPotatoes}kg`, eggs: eggsTortilla, onions: `${onions}gr` };
}

// Example 9: Exchanging variable values

export function exchanging(var1: number, var2: number) {
  let varAux = var1;
  var1 = var2;
  var2 = varAux;
  return { varUno: var1, varDos: var2 };
}

// Example 10: Even and odd

export function evenOdd(number: number) {
  return number % 2 === 0 ? "Par" : "Impar";
}

// Example 11: FIzzBuzzWhoa

// function printNumbers() {
//   for (let i = 0; i <= 105; i++) {
//     console.log(i, fizBuzzWhoa(i));
//   }
// }

export function fizBuzzWhoa(number: number) {
  if (number % 105 === 0) return "FizzBuzzWhoa";
  else if (number % 35 === 0) return "BuzzWhoa";
  else if (number % 21 === 0) return "FizzWhoa";
  else if (number % 15 === 0) return "FizzBuzz";
  else if (number % 3 === 0) return "Fizz";
  else if (number % 5 === 0) return "Buzz";
  else if (number % 7 === 0) return "Whoa";
  else return " ";
}

// # 12 Length number

export function lengthNumber(num: number) {
  let digito = 0;
  while (num > 0) {
    digito++;
    num = Math.trunc(num / 10);
  }
  return digito;
}
