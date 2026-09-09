const countByCategory = (list) => {
    return list.reduce((accum, {category}) => {
        if (!accum[category]) {
            accum[category] = 1
        }  
        else {
            accum[category] += 1
        }
            
        return accum
    }, {})
}