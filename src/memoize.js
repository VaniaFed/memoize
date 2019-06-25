export function memoize(f, resolver) {
    if (typeof f === 'undefined' || typeof f !== 'function') {
        return null;
    }
    const cache = new WeakMap();
    return function memoized(...args) {
        const key = resolver ? resolver.apply(this, args) : args[0];
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = f.apply(this, args);
        memoized.cache = cache.set(key, result) || cache;
        return result;
    };
}
