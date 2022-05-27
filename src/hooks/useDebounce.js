import React from "react";

export default function useDebounce(callback, delay) {
    const timer = React.useRef();

    const debouncedCallback = React.useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }
        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay])

    return debouncedCallback;
}
