function romanNumeral(string) {
  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
/**
 * given a string, check for valid syntax
 * -letters are not repeated more than 3 times in a row
 * -letters included are MDCLXVI
 * -letters are descending value or the following combinations - "CM" "CD" "XC" "IX" "IV"
 * if valid, begin adding values
 * letters are added unless a bigger number is encountered directly after a letter, in which case
 * take the value of the bigger number minus the smaller, and continue as normal after
 */
// And a written explanation of your solution
/**
 * the first actually fun one to do, in my opinion.
 * roman numerals have several strict rules which allow for a straightforward algorithm that
 * only ever needs to store 2 values of a string at once
 * M - 1000 D - 500 C - 100 L - 50 X - 10 V - 5 I - 1
 * a smaller number directly before a bigger number denotes subtraction
 * subtraction rules as follows
 * DM is the same as M, LC is the same as L, VX is the same as V, so omit those negatives
 * else, the rules require that OoMs are grouped, i.e. CM is acceptable but IM is not (jumps
 * order of magnitude in the subtraction)
 */
