// https://github.com/makeitrealcamp/ejercicios-javascript
// # 1 Valid Password

export function validPassword(password: string): string {
  const regex = /^[a-zA-Z0-9!@#$%^&*()-_=+`~{}\[\]|\\;:'",.<>?\/]*$/;
  if (password.length < 11) {
    return "False";
  } else if (regex.test(password)) {
    return "True";
  } else {
    return "False";
  }
}

// # 2 Taxes calculator

export function taxesCalculator(age: number, income: number): number {
  if (age < 18) return 0;
  else if (income < 1000) return 0;
  else {
    return income * 0.4;
  }
}

// # 3 Body mass index

export function bmi(weight: number, height: number) {
  const mass = weight / Math.pow(height, 2);
  if (mass < 18.5) return "Underweight";
  else if (mass >= 18.5 && mass <= 24.9) return "Normal";
  else if (mass >= 25 && mass <= 29.9) return "OverHeigh";
  else if (mass >= 30 && mass <= 34.9) return "Obece";
  else if (mass > 35) return "Extremely Obece";
}
