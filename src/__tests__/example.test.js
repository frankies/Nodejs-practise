

expect.extend({
    toBeDivisibleBy(received, argument) {
        
        const pass = received % argument == 0;
        if (pass) {
            return {
                message: () =>
                    `expected ${received} not to be divisible by ${argument}`,
                pass: true,
            };
        } else {
            return {
                message: () => `expected ${received} to be divisible by ${argument}`,
                pass: false,
            };
        }
    },
});

test('even and odd numbers', () => {
    expect(100).toBeDivisibleBy(2);
    expect(101).not.toBeDivisibleBy(2);
});


const myBeverage = {
    delicious: true,
    sour: false,
};

describe('my beverage', () => {
    test('is delicious', () => {
        expect(myBeverage.delicious).toBeTruthy();
    });

    test('is not sour', () => {
        expect(myBeverage.sour).toBeFalsy();
    });
});



// 
class CustomError extends Error {
    
}
const binaryStringToNumber = binString => {
    if (!/^[01]+$/.test(binString)) {
        throw new CustomError('Not a binary number.');
    }

    return parseInt(binString, 2);
};

describe('binaryStringToNumber', () => {
    describe('given an invalid binary string', () => {
        test('composed of non-numbers throws CustomError', () => {
            expect(() => binaryStringToNumber('abc')).toThrowError(CustomError);
        });

        test('with extra whitespace throws CustomError', () => {
            expect(() => binaryStringToNumber('  100')).toThrowError(CustomError);
        });
    });

    describe('given a valid binary string', () => {
        test('returns the correct number', () => {
            expect(binaryStringToNumber('100')).toBe(4);
        });
    });
});



