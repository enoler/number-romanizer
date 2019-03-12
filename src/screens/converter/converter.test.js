import ConverterService from './converterService.js';

const converterService = new ConverterService();

function toBeNaN (value) {
  return isNaN(value) && typeof value === 'number';
}

describe('number-romanizer', () => {
  it('It should return a string', () => {
    const testString = converterService.getRomanNumber(1);

    expect(typeof testString).toBe('string');
  });

  it('It should return NaN when is not an integer number', () => {
    const invalidFloat = converterService.getRomanNumber(2.5);
    const invalidString = converterService.getRomanNumber('e');
    const invalidObject = converterService.getRomanNumber({});

    expect(toBeNaN(invalidFloat)).toBeTruthy();
    expect(toBeNaN(invalidString)).toBeTruthy();
    expect(toBeNaN(invalidObject)).toBeTruthy();
  });
});
