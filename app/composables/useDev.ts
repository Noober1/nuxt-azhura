export const devLog = (arg: any) => {
    if (import.meta.dev) {
        console.log(arg);
    }
}

export const runInDevOnly = (fn: () => (() => void) | void) => {
    if (import.meta.dev) {
        const cleanup = fn()
        if (typeof cleanup === 'function') {
            onUnmounted(cleanup)
        }
    }
}