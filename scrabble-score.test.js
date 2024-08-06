import { calculateScrabbleScore } from "./scrabble-score";

// Write a new test that checks whether `calculateScrabbleScore` correctly calculates the score for the word `A`.



test( 'chack if correctly calculates the scroe of A', () => {
    const result = calculateScrabbleScore('A');
    expect(result).toBe(1);
    return result
})