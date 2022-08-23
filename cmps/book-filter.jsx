export class BookFilter extends React.Component {
  state = {
    filterBy: {
      title: '',
      minPrice: '',
      maxPrice: '',
    },
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === 'number' ? +target.value : target.value
    this.setState(
      (prevState) => ({
        filterBy: { ...prevState.filterBy, [field]: value },
      }),
      () => {
        this.props.onSetFilter(this.state.filterBy)
      }
    )
  }

  render() {
    const { title, minPrice, maxPrice } = this.state.filterBy
    return (
      <section className="book-filter">
        <form>
          <label htmlFor="by-title">Title </label>
          <input
            id="by-title"
            type="text"
            placeholder="By Title.."
            name="title"
            value={title}
            onChange={this.handleChange}
          />

          <label htmlFor="by-min-price">Min price </label>
          <input
            id="by-min-price"
            type="number"
            placeholder="By Min Price.."
            name="minPrice"
            value={minPrice}
            onChange={this.handleChange}
          />

          <label htmlFor="by-max-price">Max price </label>
          <input
            id="by-max-price"
            type="number"
            placeholder="By Max Price.."
            name="maxPrice"
            value={maxPrice}
            onChange={this.handleChange}
          />
        </form>
      </section>
    )
  }
}
