const express = require('express');

// Import the ApolloServer class
const { ApolloServer } = require('apollo-server-express');

const path = require('path');
const db = require('./config/connection');
const routes = require('./routes');

// Create a new instance of an Apollo server with the GraphQL schema
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// Update Express.js to use Apollo server features
server.applyMiddleware({ app });

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});
