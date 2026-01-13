function toKebabCase(input) {
    // Step 1: Validate the input
    if (typeof input !== 'string' || input === null || input === undefined || input.trim() === '') {
        throw new Error('Invalid input: Input must be a non-empty string.');
    }

    // Step 2: Normalize the string
    const normalizedString = input
        .trim()
        .toLowerCase();

    // Step 3: Replace spaces, underscores, and camelCase word boundaries with hyphens
    const kebabCaseString = normalizedString
        .replace(/[\s_]+/g, '-') // Replace spaces and underscores with hyphens
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Handle camelCase
        .replace(/-+/g, '-') // Replace multiple hyphens with a single hyphen
        .replace(/^-|-$/g, ''); // Remove leading and trailing hyphens

    return kebabCaseString;
}