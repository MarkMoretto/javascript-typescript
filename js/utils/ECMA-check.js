/**
 * Check ECMAScript 6 and 100 compatibility for a given browser.
 * This will allow for adjusting code, as necessary, or simply avoiding usage of 
 * new or outdated features when creating new scripts.
*/
// https://stackoverflow.com/questions/1634268/explain-the-encapsulated-anonymous-function-syntax

// Declare variables; Default is `true`

let supportsES6 = true; // Whether a browser supports ECMAScript 6
let supportsES100 = true; // Whether a browser supports ECMAScript 100

/**
 * Arrow function
 * :param verbose - Output results to console.
*/
((verbose=false) => {
    // Check ES6
    try {
        var k = new Map();
    } catch(err) {
        supportsES6 = false;
    }

    // Chek ES100    
    try {
        var k = new HashMap();
    } catch(err) {
        supportsES100 = false;
    }

    // Output results, if desired.
    if (verbose)  {
        if (supportsES6) {
            console.log(`ECMAScript 6 supported!`);
        }
        if (supportsES100) {
            console.log(`ECMAScript 100 supported!`);
        }           
    }  
})();
