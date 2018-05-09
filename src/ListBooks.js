import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Books from './Books'
import PropTypes from 'prop-types'

class ListBooks extends Component {

  static PropTypes = {
    myBooks: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  state = {
    bookShelves: [
      {
        id: 'currentlyReading',
        title: 'Currently Reading',
      },{
        id: 'wantToRead',
        title: 'Want To Read',
      },{
        id: 'read',
        title: 'Read',
      },
    ]
  }

  getBooks = (id) => {
    return this.props.myBooks.filter((book) => book.shelf === id)
  }

  shelfChange = ( book, shelf ) => {
    this.props.onChangeShelf(book, shelf)
  }

  render() {
        const { bookShelves } = this.state

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
                    // books={ shelf.books }
                    books={this.getBooks(shelf.id)}
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
