import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import './App.css'

class App extends Component {
  state = {
    myBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((myBooks) => {
      this.setState({ myBooks })
    })
  }

  render() {

    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <ListBooks
              // myBooks={this.state.myBooks}
              />
          )}/>
          <Route path='/search' render={({ history }) => (
            <SearchBooks
              // onAddBook={(book) => {
              //   this.addBook(book)
              //   history.push('/')
              // }}
            />
          )}/>
      </div>
    )
  }
}

export default App
