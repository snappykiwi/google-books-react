import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const bookSchema = new Schema({
  title: {
    type: String, 
    required: true
  },
  authors: [{
    type: String,
    required: true
  }],
  description: {
    type: String
  },
  image: {
    type: String
  }, 
  link: {
    type: String
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;