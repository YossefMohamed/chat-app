const userResolvers = require("./user");
const messageResolvers = require("./message");
const subscriptionResolvers = require("./subscriptions");

const mutaionResolvers = require("./mutation");
console.log({ ...mutaionResolvers.Mutation });
module.exports = {
  Query: {
    ...userResolvers.Query,
    ...messageResolvers.Query,
  },
  Mutation: {
    ...mutaionResolvers.Mutation,
  },
  Subscription: {
    ...subscriptionResolvers.Subscription,
  },
};
