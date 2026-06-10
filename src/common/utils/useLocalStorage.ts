import { useCallback } from 'react';

export function useLocalStorage<V>(key: string, value: V) {
    const get = useCallback((): V => {
        try {
            return JSON.parse(localStorage.getItem(key) ?? '') as V;
        } catch {
            return value;
        }
    }, [key, value]);

    const set = useCallback(
        (value: V) => {
            localStorage.setItem(key, JSON.stringify(value));
        },
        [key]
    );

    return { get, set };
}