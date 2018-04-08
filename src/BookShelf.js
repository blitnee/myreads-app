import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'
import * as BooksAPI from './BooksAPI'

class BookShelf extends Component {

  static PropTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }

  state = {
    myBooks: []
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(book => {
      this.setState(state => ({
        myBooks: state.myBooks.filter((b) => b.shelf)
      }))
    })
    // update view on change
  }

  render() {
    const { title, id } = this.props

    return (

      <div key={ id } className="bookshelf">
        <h2 className="bookshelf-title">{ title }</h2>
        <div className="bookshelf-books">
            <BookList id={id} onChangeShelf={(book, shelf) => {
                this.changeShelf(book, shelf)
                // history.push('/')
              }}
            />
        </div>
      </div>
    )
  }

}

export default BookShelf