const fizzBuzz = require('./fizzBuzz');

test('returns "fizz" for numbers divisible by 3', () => {
    expect(fizzBuzz(3)).toBe('fizz');
    expect(fizzBuzz(9)).toBe('fizz');
    expect(fizzBuzz(12)).toBe('fizz');
});

test('returns "buzz" for numbers divisible by 5', () => {
    expect(fizzBuzz(5)).toBe('buzz');
    expect(fizzBuzz(10)).toBe('buzz');
    expect(fizzBuzz(20)).toBe('buzz');
});

test('returns "fizzbuzz" for numbers divisible by both 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
    expect(fizzBuzz(30)).toBe('fizzbuzz');
    expect(fizzBuzz(45)).toBe('fizzbuzz');
});

test('returns the number itself for numbers not divisible by 3 or 5', () => {
    expect(fizzBuzz(1)).toBe('1');
    expect(fizzBuzz(4)).toBe('4');
    expect(fizzBuzz(7)).toBe('7');
});
