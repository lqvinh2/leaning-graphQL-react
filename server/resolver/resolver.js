const {authors, books } = require('../data/static')


const resolvers = {

    // QUERY
    Query: {
        books: (parent, args) => books,
        book: (parent, args) => books.find(x => x.id == args.id ),
        authors: (parent, args) => authors,
        author : (parent, args) => authors.find(x => x.id == args.id ),
    },


    // handle [field author] in [type Book] schema.js
    Book: {
		author: async (parent, args) => authors.find(x => x.id == parent.authorId ),
    },

    // handle [field books] in [type Author] schema.js
    Author: {
		books: async (parent, args) => books.filter(x => x.authorId == parent.id ),
    },

}

module.exports = resolvers