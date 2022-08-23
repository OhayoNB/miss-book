export function ReviewList({ book, onRemoveReview }) {
  const reviews = book.reviews

  return reviews && reviews.length ? (
    <section className="review-list">
      {reviews.map((review) => {
        return (
          <div className="flex column align-center review" key={review.id}>
            <button
              onClick={() => onRemoveReview(review)}
              className="remove-btn"
            >
              x
            </button>
            <h3>Name: {review.fullName}</h3>
            <h4>Rating: {review.rate} stars</h4>
            <h4>Read At: {review.readAt}</h4>
            <h6>Review: {review.freeTxt}</h6>
          </div>
        )
      })}
    </section>
  ) : (
    <div>No reviews yet</div>
  )
}
