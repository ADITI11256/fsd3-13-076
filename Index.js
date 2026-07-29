
const numberToWords = (num) => {
  switch (num) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
  case 4:
    return "four";
  case 5:
    return "five";
  case 6:
    return "six";
  case 7:
    return "seven";
  case 8:
    return "eight";
  case 9:
    return "nine";
  default:
    return "number out of range";
}
};
const RollLNum ="2503201000076";
const digits = String(RollLNum).split("");
console.log (digits);
let inwords = "";
digits.forEach((d) => {
  inwords +="" + numberToWords(Number(d));
  });
  console.log(inwords);
  
