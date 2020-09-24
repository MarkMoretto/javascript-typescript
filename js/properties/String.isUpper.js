/** 
 * @author Mark Moretto
 * @returns {boolean} true if single character is uppercase; false otherwise.
 * @description String property to evaluate whether a single character is uppercase.
 * @example <caption>Determine whether character is uppercase.</caption>
 * // returns true
 * "A".isUpper
*/

Object.defineProperty(String.prototype, "isUpper", {
    get() {
        return this.length === 1 ? (this.toString() === this.toString().toUpperCase() && isNaN(this.toString() * 1)) ? true : false : "Property requires single character.";
    }
});


console.assert("A".isUpper === true, '.isupper(): Single uppercase assertion error.');
console.assert("a".isUpper === false, '.isupper(): Single lowercase assertion error.');
console.assert("1".isUpper === true, '.isupper(): Single numeric value assertion error.');
console.assert("ABC".isUpper === "Property requires single character.", '.isupper(): Multiple character assertion error.');
