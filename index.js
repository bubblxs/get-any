export default Array.prototype.getAny = function () {
    if (this.length < 1) {
        throw new Error("cannot read property of undefined");
    }

    return this[Math.floor(Math.random() * this.length)];
}