export type PypiPackage = {
    "info": {
        "author": string,
        "author_email": string,
        /**
         * @deprecated The `bugtrack_url` key on this response should be considered deprecated.
         * It currently always returns `null` and in the future, the `bugtrack_url` key may be removed from this response.
         */
        "bugtrack_url": null,
        "classifiers": string[],
        "description": string,
        "description_content_type": string,
        "docs_url": null,
        "download_url": string,
        /**
         * @deprecated The `downloads` key on this response should be considered deprecated.
         * It currently always returns `-1` and in the future, the `downloads` key may be removed from this response.
         */
        "downloads": {
            "last_day": -1,
            "last_month": -1,
            "last_week": -1
        },
        "home_page": string,
        "keywords": string,
        "license": string,
        "maintainer": string,
        "maintainer_email": string,
        "name": string,
        "package_url": string,
        "platform": null,
        "project_url": string,
        "project_urls": {
            [key: string]: string,
        },
        "release_url": string,
        "requires_dist": string[],
        "requires_python": string,
        "summary": string,
        "version": string,
        "yanked": boolean,
        "yanked_reason": null | string, // string I guess
    },
    "last_serial": number,
    /**
     * @deprecated The `releases` key on this response should be considered deprecated, and projects should shift to using the simple API (which can be accessed as JSON via PEP 691) to get this information where possible.
     * In the future, the `releases` key may be removed from this response.
     */
    "releases": {
        [key: string]: {
            "comment_text": string,
            "digests": {
                "blake2b_256": string,
                "md5": string,
                "sha256": string,
            },
            /**
             * @deprecated The `downloads` key on this response should be considered deprecated.
             * It currently always returns `-1` and in the future, the `downloads` key may be removed from this response.
             */
            "downloads": -1,
            "filename": string,
            /**
             * @deprecated The `has_sig` key on this response should be considered deprecated.
             * It currently always returns `false` and in the future, the `has_sig` key may be removed from this response.
             */
            "has_sig": false,
            "md5_digest": string,
            "packagetype": "bdist_wheel", // not sure
            "python_version": string,
            "requires_python": null | string, // I guess string
            "size": number,
            "upload_time": string,
            "upload_time_iso_8601": string,
            "url": string,
            "yanked": boolean,
            "yanked_reason": null | string, // same here
        }[],
    },
    "urls": {
        "comment_text": string,
        "digests": {
            "blake2b_256": string,
            "md5": string,
            "sha256": string
        },
        /**
         * @deprecated The `downloads` key on this response should be considered deprecated.
         * It currently always returns `-1` and in the future, the `downloads` key may be removed from this response.
         */
        "downloads": -1,
        "filename": string,
        /**
         * @deprecated The `has_sig` key on this response should be considered deprecated.
         * It currently always returns `false` and in the future, the `has_sig` key may be removed from this response.
         */
        "has_sig": false,
        "md5_digest": string,
        "packagetype": "bdist_wheel",
        "python_version": string,
        "requires_python": string,
        "size": number,
        "upload_time": string,
        "upload_time_iso_8601": string,
        "url": string,
        "yanked": boolean, // same
        "yanked_reason": null | string,
    }[],
    "vulnerabilities": {
        "aliases": string[], // not sure
        "details": string,
        "summary": string,
        "fixed_in": string[],
        "id": string,
        "link": string,
        "source": string,
        "withdrawn": string
    }[]
};
