import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'

class BookShelf extends Component {

  static PropTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    // books: PropTypes.array.isRequired
  }



  render() {
    const { title, id } = this.props

    return (

      <div key={ id } className="bookshelf">
        <h2 className="bookshelf-title">{ title }</h2>
        <div className="bookshelf-books">
            <BookList id={id} />
        </div>
      </div>
    )
  }

}

export default BookShelf