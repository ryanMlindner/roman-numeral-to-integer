function romanNumeral(string) {
  let formatString = string.toUpperCase();
  //quick and dirty workaround for using JS in functionality, prop array instead of primitives
  const valSet = {M:'',D:'',C:'',L:'',X:'',V:'',I:''};
  function validate() {
    //test 2 fail states
    //subtraction error will be handled in the code
    for (let index = 0; index < formatString.length; index++) {
      if(formatString[index] === formatString[index+1] === 
        formatString[index+2] === formatString[index+3]) {
        console.log("fail 1");
        return false;
      }
      if(!(formatString[index] in valSet)) {
        console.log("fail 2");
        return false;
      }
    }
    return true;
  }

  if (validate()) {
    let sum = 0;
    for (index = 0; index < formatString.length; index++) {
      value = formatString[index];
      nextValue = formatString[index + 1];
      checkSubtract = value + nextValue;
      if (value === 'M') {sum += 1000;}
      else if (checkSubtract === 'CM') {sum += 900;
        index++;}
      else if (checkSubtract === 'CD') {sum += 400;
        index++;}
      else if (checkSubtract === 'XC') {sum += 90;
        index++;}
      else if (checkSubtract === 'XL') {sum += 40;
        index++;}
      else if (checkSubtract === 'IX') {sum += 9;
        index++;}
      else if (checkSubtract === 'IV') {sum += 4;
        index++;}
      else if (value === 'D') {sum += 500;}
      else if (value === 'C') {sum += 100;}
      else if (value === 'L') {sum += 50;}
      else if (value === 'X') {sum += 10;}
      else if (value === 'V') {sum += 5;}
      else if (value === 'I') {sum += 1;}
    }
    return sum;
  }
  else return "Invalid String";
}

if (require.main === module) {
  console.log("Expecting: 1");
  console.log(romanNumeral('I'));

  console.log("");

  console.log("Expecting: 9");
  console.log(romanNumeral('IX'));

  console.log("");

  console.log("Expecting: 402");
  console.log(romanNumeral('CDII'));

  console.log("");

  console.log("Expecting: Invalid String");
  console.log(romanNumeral('ZZZ'));
}

module.exports = romanNumeral;

// Please add your pseudocode to this file
/**
 * given a string, check for valid syntax
 * -letters are not repeated more than 3 times in a row
 * -letters included are MDCLXVI
 * -letters are descending value or the following combinations - "CM" "CD" "XC" "XL" "IX" "IV"
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
