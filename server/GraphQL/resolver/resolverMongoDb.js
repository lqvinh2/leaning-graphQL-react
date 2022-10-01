const {authors, books } = require('../../data/static')
const Author = require('../../mongoDB/models/Author')
const Book = require('../../mongoDB/models/Book')


const resolvers = {

    // QUERY START
    Query: {
        books: async (parent, args, context) => await context.mongoMethod.getAllBooksAsync(),
        book: async (parent, args, context) => await context.mongoMethod.getBookByIdAsync(args.id),
        authors: async (parent, args, context) => await context.mongoMethod.getAllAuthorsAsync(),
        author : async (parent, args, context) => await context.mongoMethod.getAuthorByIdAsync(args.id),
    },


    // handle [field author] in [type Book] schema.js
    Book: {
		author: async (parent, args, context) => await context.mongoMethod.getAuthorByIdAsync(parent.authorId),
    },

    // handle [field books] in [type Author] schema.js
    Author: {
		books: async (parent, args, context) => await context.mongoMethod.getAllBooksAsync({ authorId: parent.id }),
    },
    // QUERY END


    // MUTATION START


    // MUTATION END
    Mutation: {
        createAuthor: async (parent, args, context) => {
           return await context.mongoMethod.createAuthorAsync(args);
        },
        createBook: async (parent, args, context) => {
            return await context.mongoMethod.createBookAsync(args);
        },
    },

}

module.exports = resolvers