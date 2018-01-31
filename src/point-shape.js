//ES6
'use strict'
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
} 
  
class ColorPoint extends Point {
    constructor(x, y, color) {
        super(x, y);
        this.color = color;
    }
} 


class Test {
    static staticMethod() {
        return 'static method';
    } 

    prototypeMethod() {
        return 'prototype method';
    }
} 
module.exports = {

    Point, ColorPoint, Test
}


