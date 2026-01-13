function toCamelCase(input) {
    // Error handling for invalid inputs
    if (input === null || input === undefined) {
        throw new Error("Input cannot be null or undefined");
    }

    if (typeof input !== "string") {
        throw new Error("Input must be a string");
    }

    const trimmed = input.trim();

    if (trimmed.length === 0) {
        throw new Error("Input cannot be an empty string");
    }

    // Split by spaces, underscores, and hyphens
    const words = trimmed.split(/[\s_-]+/);

    // Convert to camelCase
    return words
        .map((word, index) => {
            if (word.length === 0) return "";
            // First word is lowercase, rest are capitalized
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join("");
}

// Example usage:
console.log(toCamelCase("hello world")); // helloWorld
console.log(toCamelCase("hello_world")); // helloWorld
console.log(toCamelCase("hello-world")); // helloWorld
console.log(toCamelCase("HELLO WORLD")); // helloWorld
console.log(toCamelCase("  hello   world  ")); // helloWorld