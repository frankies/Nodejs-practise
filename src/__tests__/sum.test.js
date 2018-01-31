const sum = require('../sum');

test('adds 1 + 2 to equal 3', () => {
    // console.log("args: %o" , arguments)
    
    expect(sum(1, 2)).toBe(3);
});

test('"a" concat with "b" equals "ab"' , () => {
  
    expect(sum('a', 'b')).toBe('a,b');
});

