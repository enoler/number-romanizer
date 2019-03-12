export default class ConverterService {
  constructor () { }

  getRomanNumber (intNumber) {
    switch (true) {
      case !Number.isInteger(intNumber):
      case isNaN(intNumber):
      case intNumber <= 0:
      case intNumber >= 4000:
        return NaN;
      default:
        return '';
    }
  }
}
