import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookMenu from './BookMenu'

class Book extends Component {

	static PropTypes = {
		book: PropTypes.object.isRequired,
		onChangeShelf: PropTypes.func.isRequired
	}

	getThumbnail = () => {
		if (this.props.book.imageLinks) {
			return this.props.book.imageLinks.thumbnail
		} else {
			return ''
		}
	}

	getAuthors = () => {
		if (this.props.book.authors) {
			return this.props.book.authors.join(', ')
		} else {
			return ''
		}
	}

	componentDidMount() {
		this.getThumbnail()
		this.getAuthors()
	}

	render() {
		const { book } = this.props
		return(
			<li>
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{
							backgroundImage: `url(${this.getThumbnail()})`}}/>
						<BookMenu
							book={ book }
							onChangeShelf={(book, shelf) => {
                this.props.onChangeShelf(book, shelf)
              }}
						/>
					</div>
					<div className="book-title">{book.title}</div>
					<div className="book-authors">{this.getAuthors()}</div>
				</div>
			</li>
		)
	}

}

export default Book
