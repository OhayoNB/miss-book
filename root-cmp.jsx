import { AppHeader } from './cmps/app-header.jsx'
import { About } from './pages/about.jsx'
import { BookApp } from './pages/book-app.jsx'
import { BookDetails } from './pages/book-details.jsx'
import { Home } from './pages/home.jsx'

const Router = ReactRouterDOM.HashRouter
const { Route, Switch } = ReactRouterDOM

export function App() {
  return (
    <Router>
      <section className="app main-layout">
        <AppHeader />
        <Switch>
          <Route path="/book/:bookId" component={BookDetails} />
          <Route path="/book" component={BookApp} />
          <Route path="/about" component={About} />
          <Route path="/" component={Home} />
        </Switch>
      </section>
    </Router>
  )
}
