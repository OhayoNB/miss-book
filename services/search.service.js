import { storageService } from './storage.service.js'

export const searchService = {
  searchBooks,
}

const KEY = 'booksSearchDB'
const url = 'https://www.googleapis.com/books/v1/volumes?printType=books&q='
const gBooks = storageService.loadFromStorage(KEY) || {}

function searchBooks(keyword) {
  if (gBooks[keyword]) return Promise.resolve(gBooks[keyword])

  return axios
    .get(url + keyword)
    .then((books) =>
      books.data.items.slice(0, 5).map((item) => item.volumeInfo)
    )
    .then((books) => books.map((book) => arrangeBookDetails(book)))
    .then((books) => {
      gBooks[keyword] = books
      storageService.saveToStorage(KEY, gBooks)
      return books
    })
}

function arrangeBookDetails(book) {
  const {
    authors,
    categories,
    description,
    imageLinks: { thumbnail },
    pageCount,
    publishedDate,
    title,
    industryIdentifiers,
  } = book

  return {
    authors,
    categories,
    description,
    thumbnail,
    pageCount,
    publishedDate: publishedDate.split('-')[0],
    title,
    id: industryIdentifiers[0].identifier,
  }
}
