export default class ConverterService {
  constructor () {
    this.ROMAN_INTEGER_MAP = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  }

  calculateRomanNumber (intNumber) {
    let romanNumber = '';
    let currentInteger = intNumber;

    while (currentInteger > 0) {
      const { integer, roman } = this.getSingleRomanNumber(currentInteger);
      romanNumber += roman;
      currentInteger -= integer;
    }

    return romanNumber;
  }

  getRomanNumber (intNumber) {
    switch (true) {
      case !Number.isInteger(intNumber):
      case isNaN(intNumber):
      case intNumber <= 0:
      case intNumber >= 4000:
        return NaN;
      default:
        return this.calculateRomanNumber(intNumber);
    }
  }

  getSingleRomanNumber (singleInteger) {
    const index = Object.keys(this.ROMAN_INTEGER_MAP).findIndex((key) =>
    this.ROMAN_INTEGER_MAP[key] <= singleInteger);

    const romanNumber = Object.keys(this.ROMAN_INTEGER_MAP)[index];

    return {
      integer: this.ROMAN_INTEGER_MAP[romanNumber],
      roman: romanNumber
    };
  }
}
