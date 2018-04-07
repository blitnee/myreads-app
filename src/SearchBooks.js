import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types'
//import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends Component {

	state = {
		query: '',
		books: []
	}

	updateQuery = (query) => {
		this.setState({ query: query.trim() })
		 console.log(query)
	}

  render() {
  	const { books } = this.state
  	const { query } = this.state

  	if (query) {
  		//const match = new RegExp(escapeRegExp(query), 'i')
  		BooksAPI.search(query).then((books) => {
      	this.setState({ books })
    	})
  	}


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
		      </div>
		    </div>
		    <div className="search-books-results">
		      <ol className="books-grid">

            { books.map(( book ) => (
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