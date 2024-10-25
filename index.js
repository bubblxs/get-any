export default Array.prototype.getAny = function () {
    return this[Math.floor(Math.random() * this.length)];
}