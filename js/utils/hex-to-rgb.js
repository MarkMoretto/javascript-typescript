/**
 * @summary Convert Hex color code to RGB
 * @description This is a little more verbose since optimization wasn't the goal
 * @author Mark Moretto
*/


/**
 * @summary Updates map/dictionary object in-place with paired decimal and hex values.
 * @param {Map} Empty Map object, preferably not a new Object instance.
 * @returns {Map<String, Number>}
*/
function createHexMap(mapObj) {
    const hexchars = "0123456789ABCDEF";
    let i = 0;
    while (i < hexchars.length) {
        //mapObj.set(`${hexchars[i]}`, i);
        mapObj[`${hexchars[i]}`] = i;
        i++;
    }
}

/**
 * @summary RGB index helper object.
*/
const rgbIdx = {0: "r", 1: "g", 2: "b"};

/**
 * @summary RGB map helper object.
*/
const rgbObj = {r: 0, g: 0, b: 0};



/**
 * Main function to convert Hex color code to RGB color code.
 * @param {String} Empty Map object, preferably not a new Object instance.
 * @returns {Map<String, Number>} {r: <number>, g: <number>, b: <number>}
*/
function hexStringToRGB(hexString) {

    // Create hexMap
    var hexMap = {};
    createHexMap(hexMap);

    // Strip off any leading octothorpe.
    let hexArr = hexString.charAt(0) === "#" ? hexString.slice(1,).split("") : hexString.split("");

    let i = 0;

    while (hexArr.length > 0) {
        let left = hexArr.shift();
        let right = hexArr.shift();

        left = hexMap[left.toString().toUpperCase()];
        right = hexMap[right.toString().toUpperCase()];

        rgbObj[rgbIdx[i]] = left * 16 + right;
        i++;

    }
    return rgbObj;
}


/**
 * Examples.  Expected result is { r: 106, g: 121, b: 247 }.
 * @summary The examples are the same code; one has a leading octothorpe.
*/

const test1 = hexStringToRGB("6a79f7");
const test1 = hexStringToRGB("#6a79f7");
