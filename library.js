const getBooksByGenre = (genre) => {
    return books.filter(({genres}) => genres.includes(genre))
}

const markAsRead = (title) => {
    books.find((book) => book.title === title).isRead = true
}