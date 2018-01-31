function sum(a, b) {
    console.log("a:%s, b:%s", typeof(a), b)
    if (typeof (a) === "number" && typeof (b) === "number" ) {
        return a + b;
    }else {
        return [a, b].join(',');
    }
}
module.exports = sum;