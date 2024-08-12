import type { PypiPackage } from './package.d.ts';

/**
 * Get package data from the PyPI registry
 * @param packageName Name of a package, like `django` or `requests`
 * @returns Data about the package. Returns `null` if the package was not found
 */
export async function getPackage(packageName: string): Promise<PypiPackage | null> {
    const url = `https://pypi.org/pypi/${packageName}/json`;
    const res = await fetch(url, {
        headers: {
            Accept: 'application/json'
        }
    });
    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
    return await res.json();
}
