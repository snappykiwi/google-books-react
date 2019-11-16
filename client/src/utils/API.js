import axios from 'axios';

export default {

  getGoogle: function (book) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}`);
  },

  getBooks: function() {
    return axios.get('/api/books');
  },

  saveBook: function(bookData) {
    return axios.post('/api/books', bookData);
  },

  deleteBook: function(bookId) {
    return axios.delete(`/api/books/${bookId}`);
  }

}