export function OptionsList({ books, onAddGoogleBook }) {
  return (
    <section>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title}{' '}
            <button onClick={() => onAddGoogleBook(book)}>+</button>
          </li>
        ))}
      </ul>
    </section>
  )
}
