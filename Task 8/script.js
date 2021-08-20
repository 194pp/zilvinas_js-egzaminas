/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri sukuria objektus su 4 metodais:

Metodai:
- sum() - priima du skaičius ir grąžina jų sumą.
- subtraction() - priima du skaičius ir grąžina jų skirtumą.
- multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą.
- division() - priima du skaičius ir grąžina jų dalybos rezultatą.
------------------------------------------------------------------------------------ */

class Calculator {
  constructor() {
    this.sum = (num1, num2) => num1 + num2;
    this.subtraction = (num1, num2) => num1 - num2;
    this.multiplication = (num1, num2) => num1 * num2;
    this.division = (num1, num2) => num1 / num2;
  }
}

const calc = new Calculator();
console.log(calc.sum(5,6));
console.log(calc.subtraction(5,6));
console.log(calc.multiplication(5,6));
console.log(calc.division(5,6));