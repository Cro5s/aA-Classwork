const mongoose = require('mongoose');
const User = mongoose.model('User');

const typeDefs = `
  type User {
    _id: ID!
    email: String!
    orders: [Order]
  }

  extend type Mutation {
    signup(email: String, password: String): User
  }
`;

const resolvers = {
  Mutation: {
    signup(_, { email, password }) {
    const newUser = new User({ email, password });
    return newUser.save();
    }
  },

  User: {
    orders(parentValue, _) {
      return Orders.find({ user: parentValue._id });
    }
  }

};

module.exports = { typeDefs, resolvers };