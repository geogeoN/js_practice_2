const findCategory = (name, tree) => {
    if (tree.name === name) return tree
    else {
        for (let branch of tree.subcategories) {
            const result = findCategory(name, branch)
            if (result) return result
        }
    }

    return null
}