import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

class ListBooks extends Component {

	static PropTypes = {
		myBooks: PropTypes.array.isRequired,
		onChangeShelf: PropTypes.func.isRequired
	}

	render() {
		const { myBooks } = this.props
		const bookShelves = [{
			shelfId: 'currentlyReading',
			title: 'Currently Reading'
		},{
			shelfId: 'wantToRead',
			title: 'Want To Read'
		},{
			shelfId: 'read',
			title: 'Read'
		}]
		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>MyReads</h1>
				</div>
				<div className="list-books-content">
					{bookShelves.map((bookshelf, index) => {
						return <BookShelf
											key={index}
											myBooks={myBooks}
											shelfId={bookshelf.shelfId}
											title={bookshelf.title}
											onChangeShelf={(book, shelf) => {
				                this.props.onChangeShelf(book, shelf)
				              }} />	})}
				</div>
				<div className="open-search">
					<Link to='/search' className="add-button">Add Books</Link>
				</div>
			</div>
		)
	}
}

export default ListBooks
