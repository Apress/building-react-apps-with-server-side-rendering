functions = require('../functions.js')

// toBe()
test('toBe Demo', () => {
    expect(functions.add(2, 3)).toBe(5)
})

// toEqual()
test('toEqual Demo', () => {
    var data = { name: 'Mohit' }
    data['country'] = 'India'
    expect(data).toEqual({ name: 'Mohit', country: 'India' })
})

// Truth Matchers 1
test('truth of null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

// Truth Matchers 2
test('truth of zero', () => {
    const n = 0;
    expect(n).not.toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

// Comparison Matchers
test('comparison', () => {
    const value = 4 + 0.20;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
    expect(value).toBeCloseTo(4.2);
    expect(value).toBe(4.2);
});

// String Matcher
test('String Matcher', () => {
    expect('Mohit is a Developer').toMatch(/Mohit/);
});

// Matcher for Iterables
const countries = [
    'India',
    'United Kingdom',
    'United States',
    'Japan',
    'Canada',
];

test('Matcher for Iterables', () => {
    expect(countries).toContain('India');
    expect(new Set(countries)).toContain('Canada');
});

// Exception Matcher
test('Exception Matcher', () => {
    expect(functions.invalidOperation).toThrow(Error);
    expect(functions.invalidOperation).toThrow('Operation not allowed!');
    expect(functions.invalidOperation).toThrow(/not allowed/);
});