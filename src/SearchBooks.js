import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'

class SearchBooks extends Component {

	static PropTypes = {
		myBooks: PropTypes.array.isRequired,
		onChangeShelf: PropTypes.func.isRequired,
		onUpdateQuery: PropTypes.func.isRequired,
		results: PropTypes.array.isRequired,
		query: PropTypes.string.isRequired
	}

	render() {
		const { query, results } = this.props
		return(
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to='/'>Close</Link>
					<div className="search-books-input-wrapper">
						<input
							className='search-books'
							type="text"
							placeholder="Search by title or author"
							value={ query }
							onChange={(event) => this.props.onUpdateQuery(event.target.value)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{ results.map((book) => (
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

export default SearchBooks
