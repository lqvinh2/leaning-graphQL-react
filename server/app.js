const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const cors = require('cors')

// var START
let apolloServer = null;


// var END


// Load schema & resolvers
const typeDefs = require('./schema/schema')
const resolvers = require('./resolver/resolver')

const app = express()
app.use(cors())

async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app });
}

startServer();

app.get("/", function (req, res) {
    res.json({ data: "api working in app.js" });
});

app.listen({ port: process.env.PORT || 4000 }, () =>
	console.log(`Server ready at http://localhost:4000${apolloServer.graphqlPath}`)
)
