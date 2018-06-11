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
				<BookShelf shelfId="currentlyReading" title="Currently Reading" />
				<BookShelf shelfId="wantToRead" title="Want To Read" />
				<BookShelf shelfId="read" title="Read" />
			</div>
			<div className="open-search">
				<Link to='/search' className="add-button">Add Books</Link>
			</div>
		</div>
	)
}

export default ListBooks
