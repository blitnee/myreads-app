import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

	static PropTypes = {
		myBooks: PropTypes.array.isRequired,
		onChangeShelf: PropTypes.func.isRequired
	}

	state = {
		query: '',
		results: []
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

  render() {
  	const { results, query } = this.state
  	// will use later:
  	// const { onChangeShelf } = this.props
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



		      <ol className="books-grid">
            { results.map(( book ) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{
                      width: 128, height: 193,
                      backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}/>
                    <div className="book-shelf-changer">
                        <select value={book.shelf}>
                        <option value="none" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))}
          </ol>




		    </div>
		  </div>
		)
	}

}

export default SearchBooks