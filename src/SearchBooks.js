import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
// import escapeRegExp from 'escape-string-regexp'
import PropTypes from 'prop-types'
import Books from './Books'

class SearchBooks extends Component {
  static propTypes = {
    // myBooks: PropTypes.array.isRequired,
    // onChangeShelf: PropTypes.func.isRequired
  }

  shelfChange = ( book, shelf ) => {
    this.props.onChangeShelf(book, shelf)
  }

  state = {
    results: [],
    query: '',
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
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    this.showResults(query)
    console.log('query: ')
    console.log(query)
  }

  showResults = (query) => {
    // const input = new RegExp(escapeRegExp(query), 'i')
    if (query) {
      BooksAPI.search(query).then((results) => {
        this.setState({ results })
        this.getShelf(this.state.results) // REMOVE DUPLICATED CODE
      })
    } else if (query == '') {
        this.setState({results: []})
        this.getShelf(this.state.results) // REMOVE DUPLICATED CODE
    }
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
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
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
