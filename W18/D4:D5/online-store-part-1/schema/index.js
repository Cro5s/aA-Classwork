const mongoose = require('mongoose');
const types = require('./types/index');
// const User = mongoose.model('User');
const Category = mongoose.model('Category');
// const Product = mongoose.model('Product');
const Order = mongoose.model('Order');
const { makeExecutableSchema } = require("graphql-tools");
const { merge } = require('lodash');


const otherTypeDefs = `

  type Category {
    _id: ID!
    name: String!
    products: [Product]
  }

  type Order {
    _id: ID!
    user: User
    products: [Product]
  }

  type Query {
    categories: [Category]
    orders: [Order]
    order(_id: ID!): Order
  }

  type Mutation {
    createCategory(name: String): Category
  }
`;

const otherResolvers = {

  Mutation: {
    createCategory(_, { name }) {
      return new Category({ name }).save();
    },

  },

  Query: {
    categories(_, __) {
      return Category.find({});
    },

    products(_, __) {
      return Product.find({});
    },

    product(_, { _id }) {
      return Product.findById(_id);
    },
    orders(_, __) {
      return Order.find({});
    },
    order(_, { _id }) {
      return Order.findById(_id);
    }
  },

  Order: {
    user: async (parentValue, _) => {
      const order = await parentValue.populate('user').execPopulate();
      return order.user;
    },

    products: async (parentValue, _) => {
      const order = await parentValue.populate('products').execPopulate();
      return order.products;
    }
  },

  Category: {
    products(parentValue, _) {
      return Product.find({ category: parentValue._id });

    }
  }

};

const typeDefs = [ ...types.map(type => type.typeDefs), otherTypeDefs ]
const resolvers = merge(...types.map(type => type.resolvers), otherResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

module.exports = { schema, typeDefs, resolvers };