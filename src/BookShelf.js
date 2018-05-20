import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class BookShelf extends Component {

	static PropTypes = {
		title: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
	}

	state = {
		shelfBooks: [],
	}

	updateBooks() {
		BooksAPI.getAll().then((myBooks) => {
		})
	}

	changeShelf(book, shelf) {
		BooksAPI.update(book, shelf)
		this.updateBooks()
	}

	componentDidMount() {
		this.updateBooks()
	}

	componentDidUpdate() {
		this.updateBooks()
	}

	render() {
		const { title, id } = this.props
		const { shelfBooks } = this.state
		return (
			<div className="bookshelf">
				<h2 className="bookshelf-title">{ title }</h2>
				<div className="bookshelf-books">
					<ol className="books-grid">
						{ shelfBooks.map((book) => (
							<Book
								book={ book }
								key={ book.id }
								onChangeShelf={(book, shelf) => {
									this.changeShelf(book, shelf) }}
								/>
						))}
					</ol>
				</div>
			</div>
		)
	}

}

export default BookShelf