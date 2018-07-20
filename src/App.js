import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'
import * as BooksAPI from './BooksAPI'

class App extends Component {

	state = {
		myBooks: [],
		results: [],
		query: ''
	}

	componentDidUpdate() {
		BooksAPI.getAll().then((myBooks) => {
			this.setState({ myBooks })
		})
	}

	componentDidMount () {
		BooksAPI.getAll().then((myBooks) => {
			this.setState({ myBooks })
		})
	}

	// @todo: Utilize Context API to prevent prop drilling to BookMenu
	changeShelf(book, shelf) {
		BooksAPI.update(book, shelf).then((shelfCollection) => {
			this.setState({ shelfCollection }); // do something with this, probably?
		})
	}

	getResults = (query) => {
		!query.length
			? this.setState({ results: [] })
			:	BooksAPI.search(query, 30).then((books) => {
		      if(!!books){
		        if(books.length > 0){
		          const results = books.map((book) => {
		            const existingBook = this.state.myBooks.find((b) => b.id === book.id)
		            book.shelf = !!existingBook ? existingBook.shelf : 'none'
		            return book
		          })
		          this.setState({ results })
		        }
		      }
		    })
	}

	updateQuery = (query) => {
		this.setState({ query })
		this.getResults(query.trim())
	}

	render () {
		const { myBooks, results, query } = this.state
		return (
			<div className="app">
					<Route exact path='/' render={() => (
								<ListBooks
									myBooks={ myBooks }
									onChangeShelf={(book, shelf) => {
                		this.changeShelf(book, shelf)
              	}} />
					)}/>
					<Route path='/search' render={() => (
						<SearchBooks
							myBooks={ myBooks }
							results={ results }
							query={ query }
							onUpdateQuery={(query) => {
								this.updateQuery(query)
							}}
							onChangeShelf={(book, shelf) => {
                this.changeShelf(book, shelf)
              }}/>
					)}/>
			</div>
		)
	}
}

export default App
