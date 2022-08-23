import { searchService } from '../services/search.service.js'
import { OptionsList } from './options-list.jsx'

export class BookAdd extends React.Component {
  state = {
    bookTitle: '',
    booksSearch: [],
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    this.setState({ [field]: value })
  }

  onSearchBooks = (ev) => {
    ev.preventDefault()
    const { bookTitle } = this.state
    searchService
      .searchBooks(bookTitle)
      .then((booksSearch) => this.setState({ bookTitle: '', booksSearch }))
  }

  render() {
    const { bookTitle, booksSearch } = this.state
    const { onSearchBooks } = this
    const { onAddGoogleBook } = this.props
    return (
      <section className="book-add">
        <form onSubmit={onSearchBooks}>
          <input
            type="search"
            name="bookTitle"
            value={bookTitle}
            onChange={this.handleChange}
            placeholder="Search for a book"
          />

          <button>Search</button>
        </form>

        <OptionsList books={booksSearch} onAddGoogleBook={onAddGoogleBook} />
      </section>
    )
  }
}
