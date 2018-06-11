import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class BookShelf extends Component {

	static PropTypes = {
		title: PropTypes.string.isRequired,
		shelfId: PropTypes.string.isRequired,
	}

	state = {
		shelfBooks: [],
	}

	updateBooks() {
		BooksAPI.getAll().then((myBooks) => {
			this.setState({
				shelfBooks: myBooks.filter((book) => book.shelf === this.props.shelfId)
			})
		})
	}

	componentDidMount() {
		this.updateBooks()
	}

	componentDidUpdate() {
		this.updateBooks()
	}

	render() {
		const { title } = this.props
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
								/>
						))}
					</ol>
				</div>
			</div>
		)
	}

}

export default BookShelf
