/*
Summary: Create a property for determining whether a String is uppercase or not.

*/



Object.defineProperty(String.prototype, "isUpper", {
    get() {
        return this.length === 1 ? (this.toString() === this.toString().toUpperCase() && isNaN(this.toString() * 1)) ? true : false : "Property requires single character.";
    }
});

/**
 * Assertions
*/

console.assert("A".isUpper === true, '.isupper(): Single uppercase assertion error.');
console.assert("a".isUpper === false, '.isupper(): Single lowercase assertion error.');
console.assert("1".isUpper === true, '.isupper(): Single numeric value assertion error.');
console.assert("ABC".isUpper === "Property requires single character.", '.isupper(): Multiple character assertion error.');

