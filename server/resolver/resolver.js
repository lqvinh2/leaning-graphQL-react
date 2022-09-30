const {authors, books } = require('../data/static')


const resolvers = {

    // QUERY
    Query: {
        books : () => books
    }
}

module.exports = resolvers