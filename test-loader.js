export async function load(url, context, defaultLoad) {
    console.log('called here for', url)
    return defaultLoad(url, context, defaultLoad);
}