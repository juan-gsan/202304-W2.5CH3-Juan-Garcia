import { fizzBuzz } from "./fizzbuzz.js";

export const createFooter = () => {
  const start: number | string = document.querySelector(
    ".main__input--start"
  )?.textContent;
  const end: number | string =
    document.querySelector(".main__input--end")?.textContent;
  const output = document.querySelector("output")!;
  const button = document.querySelector("button")!;

  const handleClick = () => {
    output?.textContent = fizzBuzz(start, end).toString();
  };

  button.addEventListener("click", handleClick);
};
