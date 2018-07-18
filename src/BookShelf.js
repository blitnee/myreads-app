import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {

	static PropTypes = {
		myBooks: PropTypes.array.isRequired,
		title: PropTypes.string.isRequired,
		shelfId: PropTypes.string.isRequired,
		onChangeShelf: PropTypes.func.isRequired
	}

	getBooks() {
		const shelfBooks = this.props.myBooks.filter((book) => book.shelf === this.props.shelfId)
		return shelfBooks
	}

	render() {
		const { title, myBooks } = this.props
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{ title }</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{ this.getBooks().map((book) => (
							<Book
								book={ book }
								key={ book.id }
								onChangeShelf={(book, shelf) => {
                	this.props.onChangeShelf(book, shelf)
              	}}
								/>
						))}
					</ol>
				</div>
			</div>
		)
	}

}

export default BookShelf
