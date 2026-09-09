const getTotalSalaries = (obj) => {
    let sum = 0

    for (let emp in obj) {
        sum += obj[emp]
    }

    return sum
}