export function memoize(f) {
    if (typeof f === 'undefined' || typeof f !== 'function') {
        return null;
    }
    const cache = {};
    function memoized(...args) {
        const key = JSON.stringify(args);

        if (key in cache) {
            return cache[key];
        }
        const result = f.apply(this, args);
        cache[key] = result;
        return result;
    }
    return memoized;
}
