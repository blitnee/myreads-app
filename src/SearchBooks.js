import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

	state = {
		query: '',
		results: [],
		myBooks: [],
	}

	updateQuery = (query) => {
		this.setState({ query })
		this.getResults(query.trim())
	}

	getResults = (query) => {
		!query.length
			? this.setState({ results: [] })
			:	BooksAPI.search(query).then((books) => {
		      if(!!books){
		        if(books.length>0){
		          const results = books.map((book) => {
		            const existingBook = this.state.myBooks.find((b) => b.id === book.id)
		            book.shelf = !!existingBook ? existingBook.shelf : 'none'
		            console.log(book.shelf)
		            return book
		          })
		          this.setState({ results })
		        }
		      }
		    })
	}

	componentDidMount() {
		BooksAPI.getAll().then((myBooks) => {
			this.setState({ myBooks })
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
