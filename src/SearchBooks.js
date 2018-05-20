import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {
	static PropTypes = {
		myBooks: PropTypes.array.isRequired,
		onChangeShelf: PropTypes.func.isRequired
	}

	shelfChange = ( book, shelf ) => {
		this.props.onChangeShelf(book, shelf)
	}

	state = {
		query: '',
		results: [],
	}

	getShelf = (array) => {
		// Error with updating on gen of results list, initiated on second character
		console.log('getShelf ran: ')
		console.log(this.state.results)

		array.map((result) => {
			this.props.myBooks.map((book) => {
				if (book.id === result.id) {
					result.shelf = book.shelf
				} else {
					result.shelf = 'noneSelect'
				}
			})
		})
		// THIS SHOULD PROBABLY GO IN BOOK MENU AND SET THE STATE
	}

	updateResults = (results) => {
		results.error || results === false
		? this.setState(() => ({ results: [] }))
		: this.setState(() => ({ results: results }))
	}

	updateQuery = (input) => {
		this.setState(() => ({
			query: input.trim()
		}))
		input
			? BooksAPI.search(input.trim()).then((results) => {this.updateResults(results)})
			: this.updateResults(false) // clear results when query is empty
	}

	// updateQuery = (query) => {
	//   this.setState({ query: query.trim() })
	//   this.showResults(query)
	//   console.log('query: ')
	//   console.log(query)
	// }

	// showResults = (query) => {
	//   // const input = new RegExp(escapeRegExp(query), 'i')
	//   if (query) {
	//     BooksAPI.search(query).then((results) => {
	//       this.setState({ results })
	//       this.getShelf(this.state.results) // REMOVE DUPLICATED CODE
	//     })
	//   } else if (query == '') {
	//       this.setState({results: []})
	//       this.getShelf(this.state.results) // REMOVE DUPLICATED CODE
	//   }
	// }

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
							value={query}
							onChange={(event) => this.updateQuery(event.target.value)}
						/>
						{JSON.stringify(query)}
					</div>
				</div>
				<div className="search-books-results">
					<Books
						books={ results }
						pushShelfChange={(book, shelf) => {
							this.shelfChange(book, shelf)
						}}/>
				</div>
			</div>
		)
	}

}

export default SearchBooks
