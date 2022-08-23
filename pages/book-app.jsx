import { BookAdd } from '../cmps/book-add.jsx'
import { BookFilter } from '../cmps/book-filter.jsx'
import { BookList } from '../cmps/book-list.jsx'
import { UserMsg } from '../cmps/user-msg.jsx'
import { bookService } from '../services/book.service.js'
import { showSuccessMsg, showErrorMsg } from '../services/event-bus.service.js'

export class BookApp extends React.Component {
  state = {
    books: [],
    filterBy: null,
  }

  componentDidMount() {
    this.loadBooks()
  }

  loadBooks = () => {
    bookService
      .query(this.state.filterBy)
      .then((books) => this.setState({ books }))
  }

  onSetFilter = (filterBy) => {
    this.setState({ filterBy }, () => {
      this.loadBooks()
    })
  }

  onAddGoogleBook = (book) => {
    bookService
      .addGoogleBook(book)
      .then(() => {
        this.loadBooks()
        showSuccessMsg('Book added successfully', book.id)
      })
      .catch(() => {
        showErrorMsg('This book already been added')
      })
  }

  render() {
    const { books } = this.state
    return (
      <section className="book-app">
        <UserMsg />
        <BookFilter onSetFilter={this.onSetFilter} />
        <BookAdd onAddGoogleBook={this.onAddGoogleBook} />
        <BookList books={books} />
      </section>
    )
  }
}
