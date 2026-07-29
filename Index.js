
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
console.log(numberToWords(5));
console.log(numberToWords(6));
console.log(numberToWords(10));
console.log(numberToWords(3));