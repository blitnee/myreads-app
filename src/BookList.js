import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class Book extends Component {

  static PropTypes = {
    id: PropTypes.string.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  state = {
    myBooks: []
  }

  componentWillMount() {
    BooksAPI.getAll().then((myBooks) => {
      this.setState({ myBooks })
    })
  }

	handleSubmit = (book , e) => {
		e.preventDefault();

		if(this.props.onChangeShelf){
		this.props.onChangeShelf(book , e.target.value);
		}
	}



  render() {
  	const { myBooks } = this.state
  	const { id } = this.props
  	let list = myBooks.filter(book => book.shelf === id)

    return(

			<ol className="books-grid">
          		{ list.map(( book) => (
				    <li key={book.id}>
				      <div className="book">
				        <div className="book-top">
				          <div className="book-cover" style={{
				            width: 128, height: 193,
				            backgroundImage: `url(${book.imageLinks.thumbnail})`
				          }}/>
				          <div className="book-shelf-changer">
				            <select value={book.shelf} onChange={e => this.handleSubmit(book, e)}>
				              <option value="none" disabled>Move to...</option>
				              <option value="currentlyReading">Currently Reading</option>
				              <option value="wantToRead">Want to Read</option>
				              <option value="read">Read</option>
				              <option value="">Delete</option>
				            </select>
				          </div>
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

export default Book