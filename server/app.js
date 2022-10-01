require('dotenv').config();

const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const cors = require('cors');
const mongoose = require('mongoose');
const { getDateTimeNow } = require('./utils/dateTime');
const typeDefs = require('./GraphQL/schema/schemaMongoDb');
const resolvers = require('./GraphQL/resolver/resolverMongoDb');
const mongoMethod = require('./mongoDB/mongoMethod');

// var START
let apolloServer = null;

// var END

// Load schema & resolvers


const app = express()
app.use(cors())

async function startServer() {

    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => ({ mongoMethod })
    });
    console.log(`|||||||||||||||||||||||||||||||||`)
    console.log(`At ${getDateTimeNow()}`)

    await apolloServer.start();
    await connectDB();
    apolloServer.applyMiddleware({ app });
}

// Connect to MongoDB
const connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})

		console.log(`MongoDB connected`)
	} catch (error) {
		console.log(error.message)
		process.exit(1)
	}
}


startServer();

app.get("/", function (req, res) {
    res.json({ data: "api working in app.js" });
});

app.listen({ port: process.env.PORT || 4000 }, () =>
	console.log(`Server ready at http://localhost:4000${apolloServer.graphqlPath}`)
)
