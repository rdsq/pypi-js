/**
 * Stats of the PyPI registry. [Reference](https://warehouse.pypa.io/api-reference/stats.html)
 */
export type PypiStats = {
    /** Top 100 packages + their size in bytes */
    "top_packages": {
        [key: string]: {
            "size": number
        },
    },
    /** Total size of PyPI packages in bytes */
    "total_packages_size": number
};
