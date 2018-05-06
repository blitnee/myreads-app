import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Books from './Books'
import PropTypes from 'prop-types'

class ListBooks extends Component {

  static PropTypes = {
    myBooks: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  shelfChange = ( book, shelf ) => {
    this.props.onChangeShelf(book, shelf)
  }

  getBooks = (id) => {
    return this.props.myBooks.filter(book => book.shelf === id)
  }

  render() {
  /*
   * Turn this back into a component... ?
   */
    const bookShelves = [{
      id: 'currentlyReading',
      title: 'Currently Reading',
      books: this.getBooks('currentlyReading')
    },{
      id: 'wantToRead',
      title: 'Want To Read',
      books: this.getBooks('wantToRead')
    },{
      id: 'read',
      title: 'Read',
      books: this.getBooks('read')
    }]

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {bookShelves.map((shelf) =>
            <div key={ shelf.id } className="bookshelf">
              <h2 className="bookshelf-title">{ shelf.title }</h2>
                <div className="bookshelf-books">
                  <Books
                    books={ shelf.books }
                    pushShelfChange={(book, shelf) => {
                      this.shelfChange(book, shelf)
                    }}
                    />
                </div>
            </div>
          )}
        </div>
        <div className="open-search">
          <Link to='/search'>Add Books</Link>
        </div>
      </div>
    )
  }

}

export default ListBooks
