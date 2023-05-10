import exp from "constants";
import { fizzBuzz } from "./fizzbuzz.js";

describe("Given a function fizzBuzz", () => {
  describe("When it receives 2 and 15", () => {
    test("Then it should return [2,'Fizz',4,'Buzz','Fizz',7,8,'Fizz','Buzz',11,'Fizz',13,14,'FizzBuzz']", () => {
      const startNumber = 2;
      const endNumber = 15;
      const expectedOutput = [
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
      ];

      const actualOutput = fizzBuzz(startNumber, endNumber);

      expect(actualOutput).toStrictEqual(expectedOutput);
    });
  });

  describe("When it receives 0 and NaN", () => {
    test("Then it should return []", () => {
      const startNumber = 0;
      const endNumber = NaN;
      const expectedOutput: any[] = [];

      const actualOutput = fizzBuzz(startNumber, endNumber);

      expect(actualOutput).toStrictEqual(expectedOutput);
    });
  });

  describe("When it receives Infinity and 0", () => {
    test("Then it should return []", () => {
      const startNumber = Infinity;
      const endNumber = 0;
      const expectedOutput: any[] = [];

      const actualOutput = fizzBuzz(startNumber, endNumber);

      expect(actualOutput).toStrictEqual(expectedOutput);
    });
  });
});
