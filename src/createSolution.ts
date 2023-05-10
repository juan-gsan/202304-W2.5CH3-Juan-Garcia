import { fizzBuzz } from "./fizzbuzz";

export const createFooter = document.createElement("footer");
createFooter.classList(".bottom");
createFooter.textContent = fizzBuzz(start, end);
