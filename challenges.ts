// # 1

function challenge1() {
  for (let i = 0; i <= 105; i++) {
    console.log(i, fizBuzzWhoa(i));
  }
}

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

// # 2

export function lengthNumber(num: number) {
  let digito = 0;
  while (num > 0) {
    digito++;
    num = Math.trunc(num / 10);
  }
  return digito;
}
