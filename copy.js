const deepClone = (obj) => {
    if (typeof obj !== 'object') return obj

    if (Array.isArray(obj)) {
        const clone = []
        for (let item of obj) {
            clone.push(deepClone(item))
        }

        return clone
    }

    const clone = {}
    for (let key in obj) {
        clone[key] = deepClone(obj[key])
    }

    return clone
}