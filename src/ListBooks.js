import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Books from './Books'
import PropTypes from 'prop-types'

class ListBooks extends Component {

  static PropTypes = {
    myBooks: PropTypes.array.isRequired
  }

    getBooks = (id) => {
      return this.props.myBooks.filter(book => book.shelf === id)
    }

  render() {

    const bookshelves = [{
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
          {bookshelves.map( shelf =>
            <div key={ shelf.id } className="bookshelf">
              <h2 className="bookshelf-title">{ shelf.title }</h2>
                <div className="bookshelf-books">
                  <Books books={ shelf.books } />
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
