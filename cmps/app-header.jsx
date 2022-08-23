const { NavLink, withRouter } = ReactRouterDOM

function _AppHeader(props) {
  function goToHome() {
    props.history.push('/')
  }

  return (
    <header className="full main-layout">
      <div className="app-header">
        <h3 className="header-title" onClick={goToHome}>
          Book Shop
        </h3>

        <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/book" activeClassName="my-active">
            Books
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export const AppHeader = withRouter(_AppHeader)
