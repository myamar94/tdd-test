const { add } = require('../src/calculator');

describe('String Calculator', () => {
  test('returns 0 for an empty string', () => {
    expect(add('')).toBe(0);
  });

  test('returns the number itself when one number is passed', () => {
    expect(add('1')).toBe(1);
    expect(add('42')).toBe(42);
  });

  test('returns the sum of two comma-separated numbers', () => {
    expect(add('1,2')).toBe(3);
  });

  test('returns the sum of multiple comma-separated numbers', () => {
    expect(add('1,2,3,4')).toBe(10);
  });

  test('handles newline as a delimiter', () => {
    expect(add('1\n2,3')).toBe(6);
  });

  test('supports custom delimiter', () => {
    expect(add('//;\n1;2')).toBe(3);
    expect(add('//|\n4|5|6')).toBe(15);
  });

  test('throws error when negative numbers are present', () => {
    expect(() => add('1,-2')).toThrow('negative numbers not allowed: -2');
    expect(() => add('-1,-2,3')).toThrow('negative numbers not allowed: -1, -2');
  });
});
