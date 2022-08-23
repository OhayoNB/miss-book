export class LongTxt extends React.Component {
  state = {
    isLongTxtShown: false,
  }

  toggleLongTxt = () => {
    this.setState(({ isLongTxtShown }) => ({ isLongTxtShown: !isLongTxtShown }))
  }

  render() {
    const { text } = this.props
    const { isLongTxtShown } = this.state
    const txt =
      isLongTxtShown || text.length < 100
        ? text
        : `${text.substring(0, 101)} ...`
    let btnText
    if (isLongTxtShown) btnText = ' Read less'
    else btnText = ' Read more'

    return (
      <h4 className="long-txt">
        {txt}
        {text.length > 100 && (
          <button className="long-txt-btn" onClick={this.toggleLongTxt}>
            {btnText}
          </button>
        )}
      </h4>
    )
  }
}
