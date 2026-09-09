const findUserById = (list, id) => {
    return list.find(user => user.id === id) ?? null
}