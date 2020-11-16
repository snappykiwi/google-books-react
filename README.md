# React Google Book Search

## Overview

This website is built using React for a front end and a NodeJs with Express backend and a Mongo database. It pulls from the Google Books API using Axios when a user enters the search for a book. Some basic information for books which fit the search query are displayed including their image, title, authors, and description, along with a link. Users can then choose to either view the book information on google or save the book to the database. All books saved to the database will appear on the "saved" page. Users can also delete books from the database which removes them from the saved page as well.<br/>
<br/>
This website is made up of two pages: Search and Save.


## Technologies 
* ReactJS
* MongoDB
* Mongoose
* Axios
* Express
* NodeJS
* Materialize
* Heroku 

<br/>

## Code Structure

The code is split up with all of the react/front end code in the client folder which is then split into a public folder which contains the static files, and a src folder which contains the components, pages, utils, and index.js/App.js and their corresponding styles. App.js is where the router for the react pages can be found. <br/>
<br/>
The pages folder contains a folder for each Search and Save. These have the js and css files which are necessary for those pages. Both are class components. The components folder has the three other components necessary for the website: Nav, Results, and Searchbar. Again, these folders each contain the appropriate js and css files. The Results component is reused for the Search and Save pages, being used to display the data received back from the google books api or the database depending on the page. <br/>
<br/>
The functions which call for the data, using axios are located in the API.js file in the utils folder <br/>
<br/>
The back end code and folders are located in the root of the project. This is where the server.js file is, which starts up the express server.<br/>
<br/>
The models for the database are in the models folder, which has an index.js file to serve up the models when the models folder is referenced. It also contains the Book.js file which holds the schema for the mongoose Book model.<br/>
<br/>
The controllers folder contains the booksController.js file. This is where the functions which make the calls/queries to the db are. There are methods for finding all of the books in the db, for creating a new book in the db, and for deleting a specific book from the db. <br/>
<br/>
Lastly there is the routes folder which holds the apiRoutes and references to the booksController methods. <br/>
