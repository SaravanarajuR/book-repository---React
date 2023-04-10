import mongoose from "mongoose";

const bookSchema = {
  mail: String,
  books: Array,
};

const Book = new mongoose.model("Book", bookSchema);

export default Book;
