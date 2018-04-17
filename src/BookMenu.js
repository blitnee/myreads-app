import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookMenu extends Component {

  static PropTypes = {
    onChangeShelf: PropTypes.func.isRequired,
    book: PropTypes.object.isRequired
  }

/*
 * Book and e are submitting the proper info. Don't change this!
 */
  handleSubmit = (book , e) => {
    e.preventDefault();

    if(this.props.onChangeShelf){
      this.props.onChangeShelf(book , e.target.value);
    }
  }

  render() {

    const { book } = this.props

  	return(
      <div className="book-shelf-changer">
        <select value={ book.shelf } onChange={e => this.handleSubmit(book, e)}>
          <option value="none" disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="noneSelect">None</option>
        </select>
      </div>
		)
	}
}

export default BookMenu