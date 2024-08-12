/** Regular expression to identify packages in HTML */
export const packageRegex = /\<a href="\/simple\/(.+)\/"\>.+\<\/a\>/g;

/** HTTP endpoint to list all packages */
export const allPackagesEndpoint = 'https://pypi.org/simple/';

/**
 * Iterate all package matches in HTML input string
 * @param htmlInput The input text as HTML
 */
export function* iterateHtmlInput(htmlInput: string): Generator<string> {
    let match = packageRegex.exec(htmlInput);
    while (match) {
        yield match[1];
        match = packageRegex.exec(htmlInput);
    }
}

/**
 * Iterate all packages in the PyPI registry.
 * Some of them may not exist
 * @example
 * for (const packageName of await pypi.iterate()) {}
 */
export async function iterate(): Promise<Generator<string>> {
    const res = await fetch(allPackagesEndpoint, {
        headers: {
            'Accept': 'text/html',
        },
    });
    if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
    const htmlInput = await res.text();
    return iterateHtmlInput(htmlInput);
}

/**
 * Get all packages in the PyPI registry. The `iterate` method is often more efficient.
 * Some of them may not exist
 * @returns All packages as an array
 */
export async function all(): Promise<string[]> {
    const iterator = await iterate();
    return Array.from(iterator);
}
