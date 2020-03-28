const mongoose = require('mongoose');
const Product = mongoose.model('Product');

const typeDefs = `
  type Product {
    _id: ID!
    name: String!
    price: Float!
    description: String
    category: Category
  }

  extend type Query {
    products: [Product]
    product(_id: ID!): Product 
  }

  extend type Mutation {
    createProduct(name: String, price: Float): Product
    deleteProduct(_id: ID!): UpdateResponse
  }

  type UpdateResponse {
    success: Boolean!
    message: String
  }
`;

const resolvers = {
  Product: {
    category: async (parentValue, _) => {
      const product = await parentValue.populate("category").execPopulate();
      return product.category;
    }
  },

  Mutation: {
    deleteProduct: async (_, { _id }) => {
      const prod = await Product.findOne({ _id });
      console.log(prod);
      if (prod) {
        await prod.remove();
        return {
          success: true,
          message: "Product removed"
        };
      } else {
        return {
          success: false,
          message: "Unable to remove product"
        };
      }
    },

    createProduct(_, { name, price }) {
      return new Product({ name, price }).save();
    }
  },

  Query: {
    products(_, __) {
      return Product.find({});
    },

    product(_, { _id }) {
      return Product.findById(_id);
    }
    
  },

};

module.exports = { typeDefs, resolvers };