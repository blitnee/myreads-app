# MyReads Project

This application allows users to select and categorize books they have read, are currently reading, or want to read. The project emphasizes key features of React. This application utilizes a provided API server and library to persist information as you interact with the application. The application has been broken down into 6 distinct components:
* `App` - Holds `SearchBooks` and `ListBooks` views
* `SearchBooks` - Displays a list of queried results.
* `ListBooks` - Displays a categorized list of a user's books.
* `BookShelf` - Holds books that belong to the corresponding shelf.
* `Book` - Displays a list of books of the same shelf.
* `BookMenu` - Alters the book shelf state.


## Instructions

1. Download a copy of the project locally or clone the repository:

    `git clone https://github.com/computationalcore/myreads`

2. Install dependencies and run:

    `npm install`

    `npm start`

    if you are using yarn

    `yarn install`

    `yarn start`


## Backend Server

Udacity provided a backend server for this project's development. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods used to perform necessary operations on the backend.

### Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.


## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks in [the project README](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## License
This project is licensed under the MIT [License](https://github.com/computationalcore/myreads/blob/master/LICENSE) - see the LICENSE file for details
