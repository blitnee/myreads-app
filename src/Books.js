import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookMenu from './BookMenu'

class Books extends Component {

  static PropTypes = {
    books: PropTypes.object.isRequired,
    pushShelfChange: PropTypes.func.isRequired
  }

  newValue = ( book, shelf ) => {
  	this.props.pushShelfChange(book, shelf)
  }

	render() {
		const { books } = this.props

	return(
			<ol className="books-grid">
				{ books.map(( book ) => (
					<li key={book.id}>
						<div className="book">
							<div className="book-top">
								<div className="book-cover" style={{
							    width: 128, height: 193,
							    backgroundImage: `url(${book.imageLinks.thumbnail})`
									}}/>
								<BookMenu
									book={ book }
									onNewValue={ (book, shelf) => {
										this.newValue(book, shelf)
									}}/>
							</div>
							<div className="book-title">{book.title}</div>
							<div className="book-authors">{book.authors}</div>
						</div>
					</li>
				))}
			</ol>
		)
	}

}

export default Books
