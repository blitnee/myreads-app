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

  updateBooks() {
    BooksAPI.getAll().then((myBooks) => {
      this.setState({myBooks})
    })
  }

  componentDidMount() {
    this.updateBooks()
  }

  changeShelf(book, shelf) {
    BooksAPI.update(book, shelf)
    this.updateBooks()
  }

  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => (
            <ListBooks
              myBooks={ this.state.myBooks }
              onChangeShelf={ (book, shelf) => {
                this.changeShelf(book, shelf)
              }}/>
          )}/>
          <Route path='/search' render={() => (
            <SearchBooks
              myBooks={ this.state.myBooks }
              onChangeShelf={ (book, shelf) => {
                this.changeShelf(book, shelf)
              }}/>
          )}/>
      </div>
    )
  }

}

export default App
