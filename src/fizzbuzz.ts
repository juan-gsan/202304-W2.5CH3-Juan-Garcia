export const fizzBuzz = (start: number, end: number): (number | string)[] => {
  const numbersContainer: (number | string)[] = [];
  for (let item: number | string = start; item <= end; item++) {
    if (item % 3 === 0 && item % 5 === 0) {
      numbersContainer.push("FizzBuzz");
      continue;
    }

    if (item % 3 === 0) {
      numbersContainer.push("Fizz");
      continue;
    }

    if (item % 5 === 0) {
      numbersContainer.push("Buzz");
      continue;
    }

    numbersContainer.push(item);
  }

  return numbersContainer;
};
