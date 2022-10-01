const Author = require("./models/Author")
const Book = require("./models/Book")

const mongoMethod = {
	getAllBooksAsync: async (condition = null) =>
		condition === null ? await Book.find() : await Book.find(condition),
	getBookByIdAsync: async id => await Book.findById(id),
	getAllAuthorsAsync: async () => await Author.find(),
	getAuthorByIdAsync: async id => await Author.findById(id),
	createAuthorAsync: async args => {
		const newAuthor = new Author(args)
		return await newAuthor.save()
	},
	createBookAsync: async args => {
		const newBook = new Book(args)
		return await newBook.save()
	}
}

module.exports = mongoMethod
