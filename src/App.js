import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'
import * as BooksAPI from './BooksAPI'

class App extends Component {

	state = {
		myBooks: [],
	}

	componentDidMount () {
		BooksAPI.getAll().then((myBooks) => {
			this.setState({ myBooks })
		})
	}

	// @todo: Utilize Context API to prevent prop drilling
	changeShelf(book, shelf) {
		console.log(book, shelf)
		BooksAPI.update(book, shelf).then((myBooks) => {
			console.log(myBooks) // do something with this, probably?
		})
	}

	render () {
		const { myBooks } = this.state
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
						<SearchBooks myBooks={ myBooks }/>
					)}/>
			</div>
		)
	}
}

export default App
