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

  it('It should accept ONLY numbers between 0 and 4000', () => {
    const invalidOver3999 = converterService.getRomanNumber(4000);
    const invalidUnder1 = converterService.getRomanNumber(0);

    expect(toBeNaN(invalidOver3999)).toBeTruthy();
    expect(toBeNaN(invalidUnder1)).toBeTruthy();
  });

  it('It should convert the basic numbers', () => {
    const I = converterService.getRomanNumber(1);
    const IV = converterService.getRomanNumber(4);
    const V = converterService.getRomanNumber(5);
    const IX = converterService.getRomanNumber(9);
    const X = converterService.getRomanNumber(10);
    const XL = converterService.getRomanNumber(40);
    const L = converterService.getRomanNumber(50);
    const XC = converterService.getRomanNumber(90);
    const C = converterService.getRomanNumber(100);
    const CD = converterService.getRomanNumber(400);
    const D = converterService.getRomanNumber(500);
    const CM = converterService.getRomanNumber(900);
    const M = converterService.getRomanNumber(1000);

    expect(I).toBe('I');
    expect(IV).toBe('IV');
    expect(V).toBe('V');
    expect(IX).toBe('IX');
    expect(X).toBe('X');
    expect(XL).toBe('XL');
    expect(L).toBe('L');
    expect(XC).toBe('XC');
    expect(C).toBe('C');
    expect(CD).toBe('CD');
    expect(D).toBe('D');
    expect(CM).toBe('CM');
    expect(M).toBe('M');
  });
});
