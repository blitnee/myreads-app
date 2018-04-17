import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import BookMenu from './BookMenu'

class Books extends Component {

  static PropTypes = {
    books: PropTypes.object.isRequired
  }

  state = {
    myBooks: []
  }

/*
 * Updating, but not updating view!
 */
  changeShelf(book, shelf) {
    BooksAPI.update(book, shelf).then( book => {
      this.setState( state => ({
        myBooks: state.myBooks.filter((b) => b.shelf)
      }))
    })
  }

  render() {

  	const { books } = this.props

    return(

			<ol className="books-grid">
      	{ books.map(( book ) => (
			    <li key={book.id}>
			      <div className="book">
			        <div className="book-top">
			          <div className="book-cover" style={{
			            width: 128, height: 193,
			            backgroundImage: `url(${book.imageLinks.thumbnail})`
			          }}/>
			          <BookMenu
			          	book={ book }
			          	onChangeShelf={( book , shelf ) => {
		              	this.changeShelf(book, shelf)
		              }}/>
			        </div>
			        <div className="book-title">{book.title}</div>
			        <div className="book-authors">{book.authors}</div>
			      </div>
			    </li>
		    ))}
      </ol>
    )
	}

}

export default Books
