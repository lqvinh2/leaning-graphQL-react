const {authors, books } = require('../data/static')


const resolvers = {

    // QUERY
    Query: {
        books: (parent, args) => books,
        book: (parent, args) => books.find(x => x.id == args.id ),
        authors: (parent, args) => authors,
        author : (parent, args) => authors.find(x => x.id == args.id ),
    }
}

module.exports = resolvers