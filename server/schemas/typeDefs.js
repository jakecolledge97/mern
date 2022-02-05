const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        password: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Book {
        authors: [User]
        description: String 
        bookId: Int
        image: String
        link: String
        title: String 
    }

    input bookData {
        author: [String]
        description: String
        title: String!
        bookId: String!
        image: String 
        link: String
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me(email: String!): User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        saveBook(input: bookData): User
        deleteBook(bookId: String!): User
    }

`;

module.exports = typeDefs;