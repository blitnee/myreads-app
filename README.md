# MyReads App :books:

This application allows users to select and categorize books they have read, are currently reading, or want to read. The project emphasizes key features of React. This application utilizes a provided API server and library to persist information as you interact with the application. The application has been broken down into 6 distinct components:
* `App` - Holds `SearchBooks` and `ListBooks`
* `SearchBooks` - Displays a collection of queried book results
* `ListBooks` - Displays three bookshelves: Currently Reading, Want to Read, and Read
* `BookShelf` - Displays the books from a user's list that share the corresponding shelf value
* `Book` - Displays a book's cover, title, and authors
* `BookMenu` - Displays a book's shelf state

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
Udacity provided a backend server for this project. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods used to perform necessary operations on the backend.

### Important Note :exclamation:
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms (see below). These terms are the _only_ terms that will work with the backend.

`'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'`

## Create React App
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks in the project [`README`](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## License
This project is licensed under the MIT [License](https://github.com/computationalcore/myreads/blob/master/LICENSE) - see the LICENSE file for details.