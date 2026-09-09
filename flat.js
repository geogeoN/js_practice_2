const flat = (arr, depth = 1) => {
    let flatted = [];

    if (depth === 0) {
        return arr;
    }

    for (let item of arr) {
        if (Array.isArray(item)) {
            flatted = [...flatted, ...flat(item, depth - 1)]
        }
        else {
            flatted.push(item)
        }
    }

    return flatted
}