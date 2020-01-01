const { ApolloServer } = require("apollo-server-micro");
const { ApolloGateway } = require("@apollo/gateway");

const gateway = new ApolloGateway({
  serviceList: [
    // Switch the "url" based on NODE_ENV or other ENV (staging etc)
    { name: "accounts", url: "http://localhost:3000/api/accounts" },
    { name: "reviews", url: "http://localhost:3000/api/reviews" },
    { name: "products", url: "http://localhost:3000/api/products" },
    { name: "inventory", url: "http://localhost:3000/api/inventory" }
  ]
});

const server = new ApolloServer({
  gateway,
  subscriptions: false
});

module.exports = server.createHandler({ path: "/api" });
