const { Link } = ReactRouterDOM
import { utilService } from '../services/util.service.js'

export function BookPreview({ book }) {
  return (
    <Link to={`/book/${book.id}`}>
      <div className="book-preview">
        <h3>{book.title}</h3>
        {book.listPrice && (
          <h4>
            {book.listPrice.amount}
            {utilService.getPriceCurrency(book.listPrice.currencyCode)}
          </h4>
        )}
        <div className="img-container">
          <img src={book.thumbnail} alt="" />
        </div>
      </div>
    </Link>
  )
}
