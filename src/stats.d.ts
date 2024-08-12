/**
 * Stats of the PyPI registry. [Reference](https://warehouse.pypa.io/api-reference/stats.html)
 */
export type PypiStats = {
    "top_packages": {
        [key: string]: {
            "size": number
        },
    },
    "total_packages_size": number
};
