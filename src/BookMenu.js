import React, { Component } from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class BookMenu extends Component {

	static PropTypes = {
		book: PropTypes.object.isRequired,
	}

	state = {
		shelf: ''
	}

	changeShelf = (book, shelf) => {
		BooksAPI.update(book, shelf)
	}

	handleSubmit = (book , e) => {
		e.preventDefault()
		this.changeShelf(book, e.target.value)
		if(location.pathname !== '/') {
			location.pathname = '/'
		}
	}

	componentDidMount = () => {
		// @todo: Need to validate for empty query, error "setstate() on unmounted component"
	 	BooksAPI.getAll().then((myBooks) => {
			const match = myBooks.filter(book => book.id === this.props.book.id)
			match.length === 1
				? this.setState(() => ({ shelf:  match[0].shelf }))
				: this.setState(() => ({ shelf:  'noneSelect' }))
		})
	}

	render() {
		const { book } = this.props
		const { shelf } = this.state
		return(
			<div className="book-shelf-changer">
				<select value={ shelf } onChange={ (e) => this.handleSubmit(book, e)}>
					<option value="none" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="noneSelect">None</option>
				</select>
			</div>
		)
	}

}

export default BookMenu
