// dummy test loader to check when it's executed
/**
 * 
 * @param {string} url: the url of the file/module to load 
 * @param {object} context: object contains info like format and importAssertions
 * @param {async function} defaultLoad 
 * @returns 
 */
export async function load(url, context, defaultLoad) {
    console.log('called for', url);
    /**
     * url logs would be like follows:
     *  called for node:http
        called for node:fs/promises
        called for file:///D:/web/rsc-from-scratch/node_modules/escape-html/index.js
     */
    return defaultLoad(url, context, defaultLoad);
}