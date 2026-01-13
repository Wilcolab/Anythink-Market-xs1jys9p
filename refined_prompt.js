/**
 * Converts a given string to camel case format.
 * 
 * Camel case format capitalizes the first letter of each word except for the first word,
 * and removes any spaces, underscores, or hyphens.
 * 
 * @param {string} input - The string to be converted to camel case.
 * @returns {string} The camel case representation of the input string.
 * @throws {Error} Throws an error if the input is not a string.
 * 
 * @example
 * toCamelCase('hello world'); // returns 'helloWorld'
 * toCamelCase('make_this camel-case'); // returns 'makeThisCamelCase'
 * toCamelCase('  leading and trailing spaces  '); // returns 'leadingAndTrailingSpaces'
 */

/**
 * Converts a given string to dot case format.
 * 
 * Dot case format converts all words to lowercase and joins them with dots,
 * removing any spaces, underscores, or hyphens.
 * 
 * @param {string} input - The string to be converted to dot case.
 * @returns {string} The dot case representation of the input string.
 * @throws {Error} Throws an error if the input is not a string.
 * 
 * @example
 * toDotCase('hello world'); // returns 'hello.world'
 * toDotCase('make_this camel-case'); // returns 'make.this.camel.case'
 * toDotCase('  leading and trailing spaces  '); // returns 'leading.and.trailing.spaces'
 */
function toCamelCase(input) {
    // Error handling for non-string inputs
    if (input === null || input === undefined) {
        return '';
    }

    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Trim whitespace
    const trimmed = input.trim();

    // Return empty string for empty input
    if (trimmed.length === 0) {
        return '';
    }

    // Split by spaces, underscores, hyphens, and handle mixed casing
    const words = trimmed
        .split(/[\s_-]+/)
        .filter(word => word.length > 0)
        .map((word, index) => {
            // Convert word to lowercase
            const lowerWord = word.toLowerCase();
            
            // Capitalize first letter only if not the first word
            if (index === 0) {
                return lowerWord;
            }
            return lowerWord.charAt(0).toUpperCase() + lowerWord.slice(1);
        });

    return words.join('');
}
function toDotCase(input) {
    // Error handling for non-string inputs
    if (input === null || input === undefined) {
        return '';
    }

    if (typeof input !== 'string') {
        throw new Error('Input must be a string');
    }

    // Trim whitespace
    const trimmed = input.trim();

    // Return empty string for empty input
    if (trimmed.length === 0) {
        return '';
    }

    // Split by spaces, underscores, hyphens, and handle mixed casing
    const words = trimmed
        .split(/[\s_-]+/)
        .filter(word => word.length > 0)
        .map(word => word.toLowerCase());

    return words.join('.');
}