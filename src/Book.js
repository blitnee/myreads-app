import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookMenu from './BookMenu'

class Book extends Component {

	static PropTypes = {
		book: PropTypes.object.isRequired,
		onChangeShelf: PropTypes.func.isRequired,
	}

	render() {
		const { book, onChangeShelf } = this.props
		return(
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{
							width: 128, height: 193,
							backgroundImage: `url(${book.imageLinks.thumbnail})`
							}}/>
						<BookMenu
							book={ book }
							onNewValue={(book, shelf) => {
								onChangeShelf(book, shelf) }}
							/>
					</div>
					<div className="book-title">{book.title}</div>
					<div className="book-authors">{book.authors}</div>
				</div>
			</li>
		)
	}

}

export default Book
