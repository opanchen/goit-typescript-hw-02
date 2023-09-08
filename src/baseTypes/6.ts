/*
  Як ви вкажете типи для аргументів і значень цих функцій, що повертаються?
*/

function showMessage(message: string): void {
  // string для аргументу виключно через неймінг, може бути будь-який тип (any)
  console.log(message);
}

function calc(num1: number, num2: number): number {
  // якщо не розглядати можливість додавання рядків
  return num1 + num2;
}

function customError(): never {
  throw new Error("Error");
}

export {};
