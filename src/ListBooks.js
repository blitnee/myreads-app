import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

function ListBooks () {
	return (
		<div className="list-books">
			<div className="list-books-title">
				<h1>MyReads</h1>
			</div>
			<div className="list-books-content">
				<BookShelf id="currentlyReading" title="Currently Reading" />
				<BookShelf id="wantToRead" title="Want To Read" />
				<BookShelf id="read" title="Read" />
			</div>
			<div className="open-search">
				<Link to='/search' className="add-button">Add Books</Link>
			</div>
		</div>
	)
}

export default ListBooks
