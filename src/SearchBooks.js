import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

	static PropTypes = {
		myBooks: PropTypes.array.isRequired
	}

	// @todo: Move all state and actions to App.js
	state = {
		query: '',
		results: [],
	}

	updateQuery = (query) => {
		this.setState({ query })
		this.getResults(query.trim())
	}

	getResults = (query) => {
		!query.length
			? this.setState({ results: [] })
			:	BooksAPI.search(query, 30).then((books) => {
		      if(!!books){
		        if(books.length > 0){
		          const results = books.map((book) => {
		            const existingBook = this.props.myBooks.find((b) => b.id === book.id)
		            book.shelf = !!existingBook ? existingBook.shelf : 'none'
		            return book
		          })
		          this.setState({ results })
		        }
		      }
		    })
	}

	render() {
		const { query, results } = this.state
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
							onChange={(event) => this.updateQuery(event.target.value)}
						/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{ results.map((book) => (
							// This array should be passed back to this component every time a book's shelf
							// is updated, updating the book's shelf values for every book within the search page.
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

export default SearchBooks
