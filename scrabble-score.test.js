import { test, expect } from "vitest";
import { calculateScrabbleScore } from "./scrabble-score";

// Write a new test that checks whether `calculateScrabbleScore` correctly calculates the score for the word `A`.

test("check if correctly calculates the score of A", () => {
	const result = calculateScrabbleScore("A");
	expect(result).toBe(1);
	console.log(`results = ${result}`);
	return result;
});

// test("check if correctly calculates the score of B", () => {
// 	const result = calculateScrabbleScore("B");
// 	expect(result).toBe(3);
// 	return result;
// });
