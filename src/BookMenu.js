import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookMenu extends Component {

	static PropTypes = {
		book: PropTypes.string.isRequired,
		onChangeShelf: PropTypes.func.isRequired
	}

	handleSubmit = (book, e) => {
		e.preventDefault()
		this.props.onChangeShelf(book, e.target.value)
	}

	render() {
		const { book } = this.props
		return(
			<div className="book-shelf-changer">
				<select value={ book.shelf } onChange={ (e) => this.handleSubmit(book, e)}>
					<option value="noneSelect" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		)
	}

}

export default BookMenu
