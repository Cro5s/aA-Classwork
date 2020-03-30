const mongoose = require('mongoose');
const User = mongoose.model('User');

const typeDefs = `
  type User {
    _id: ID!
    email: String!
    orders: [Order]
  }

  type UserCredentials {
    _id: ID!
    email: String!
    orders: [Order]
    token: String!
  }

  extend type Mutation {
    signup(email: String, password: String): UserCredentials
    
  }
`;

const resolvers = {
  Mutation: {
    signup(_, { email, password }) {
      return User.signUp(email, password);
    }
  },

  User: {
    orders(parentValue, _) {
      return Orders.find({ user: parentValue._id });
    }
  }

};

module.exports = { typeDefs, resolvers };