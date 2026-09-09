const getTotalPriceByCategory = (category) => {
    return catalog.reduce((acc, item) => (item.category === category) ? acc += item.price : acc, 0)
}