import React from 'react'
import { Link } from 'react-router-dom'
import BookShelf from './BookShelf'

function ListBooks () {
	const bookShelves = [
	{
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
					return <BookShelf key={index} shelfId={bookshelf.shelfId} title={bookshelf.title} />
				})}
			</div>
			<div className="open-search">
				<Link to='/search' className="add-button">Add Books</Link>
			</div>
		</div>
	)
}

export default ListBooks
