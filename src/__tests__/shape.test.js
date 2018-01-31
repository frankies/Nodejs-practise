const {ColorPoint, Point} =  require('../point-shape')

test('test point', () => {

    const p = new Point(10, 20);
    console.log(p.x, p.y);
});