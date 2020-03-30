const mongoose = require('mongoose');
const Category = mongoose.model('Category');

const typeDefs = `
    type Category {
    _id: ID!
    name: String!
    products: [Product]
  }

  extend type Query {
    categories: [Category]
  }

  extend type Mutation {
    createCategory(name: String): Category
  }
`;

const resolvers = {
  Mutation: {
    createCategory(_, { name }) {
      return new Category({ name }).save();
    }
  },

  Query: {
    categories(_, __, context) {
      console.log(context.user)
      return Category.find({});
    }
  },

  Category: {
    products(parentValue, _) {
      return Product.find({ category: parentValue._id });
    }
  }
};

module.exports = { typeDefs, resolvers };