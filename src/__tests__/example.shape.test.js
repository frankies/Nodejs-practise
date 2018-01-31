const { ColorPoint, Point, Test } = require('../point-shape')

describe('===test shape===', () => {

    test('test point', () => {

        const p = new Point(10, 20);
        expect([p.x, p.y]).toEqual([10, 20]);
    });

    test('test color-point', () => {
        // console.log(typeof ColorPoint)
        // Point(100, 100);
        const p = new ColorPoint(20, 30, 'red');
        expect([p.x, p.y, p.color]).toEqual([20, 30, 'red']);
    });

    test('test Test class.', () => {
        // debugger;
        Test.staticMethod();
        Test.prototype.prototypeMethod();

    });
});
