const arrayToObject = (arr) => {
    return arr.reduce((accum, {name, value}) => {
        accum[name] = value
        return accum
    }, {})
}