import type { PypiStats } from './stats.d.ts';

export const statsEndpoint = 'https://pypi.org/stats/';

export async function stats(): Promise<PypiStats> {
    const res = await fetch(statsEndpoint, {
        headers: {
            Accept: 'application/json',
        },
    });
    if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`);
    return await res.json();
}
