import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Books from './Books'
import * as BooksAPI from './BooksAPI'

class BookShelf extends Component {

	static PropTypes = {
		title: PropTypes.string.isRequired,
		id: PropTypes.string.isRequired,
	}

	state = {
		myBooks: [],
	}

	// Update myBooks State (and view!)
	updateBooks() {
		BooksAPI.getAll().then((myBooks) => {
			this.setState({myBooks})
		})
	}

	// Update books before component render
	componentDidMount() {
		this.updateBooks()
	}

	// Update BooksAPI with change and update component state/view
	changeShelf(book, shelf) {
		BooksAPI.update(book, shelf)
		this.updateBooks()
	}

	// Get books for books component
	getBooks = (id) => {
		return this.state.myBooks.filter((book) => book.shelf === id)
	}

	render() {
		const { title, id } = this.props
		return (
			<div key={ id } className="bookshelf">
				<h2 className="bookshelf-title">{ title }</h2>
				<div className="bookshelf-books">
					<Books
						books={this.getBooks(id)}
						onChangeShelf={(book, shelf) => {
							this.changeShelf(book, shelf)
						}}
						/>
				</div>
			</div>
		)
	}

}

export default BookShelf