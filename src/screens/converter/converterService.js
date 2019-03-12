export default class ConverterService {
  constructor () { }

  getRomanNumber (intNumber) {
    switch (true) {
      case !Number.isInteger(intNumber):
      case isNaN(intNumber):
        return NaN;
      default:
        return '';
    }
  }
}
