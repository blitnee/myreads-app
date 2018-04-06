import React from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class App extends React.Component {
  state = {
    books: []
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // showSearchPage: false
  }

  moveBook = (book) => {

  }

  deleteBook = (book) => {

  }

  addBook(book) {
  }

  render() {

    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <ListBooks
              books={this.state.books}
              onMoveBook={this.moveBook}
              onDeleteBook={this.deleteBook}
            />
          )}/>
          <Route path='/search' render={({ history }) => (
            <SearchBooks
              onAddBook={(book) => {
                this.addBook(book)
                history.push('/')
              }}
            />
          )}/>
      </div>
    )
  }
}

export default App
