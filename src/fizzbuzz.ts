export const fizzBuzz = (start: number, end: number) => {
  const numbersContainer: number | string[] = [];
  for (let item: any = start; item <= end; item++) {
    numbersContainer.push(item);

    if (item % 3 === 0) {
      numbersContainer.pop();
      numbersContainer.push("Fizz");
    }
    if (item % 5 === 0) {
      numbersContainer.pop();
      numbersContainer.push("Buzz");
    }
    if (item % 3 === 0 && item % 5 === 0) {
      numbersContainer.pop();
      numbersContainer.push("FizzBuzz");
    }
  }

  return numbersContainer;
};
