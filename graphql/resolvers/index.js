const userResolvers = require("./user");
const messageResolvers = require("./message");

const mutaionResolvers = require("./mutation");

module.exports = {
  Query: {
    ...userResolvers.Query,
    ...messageResolvers.Query,
  },
  Mutation: {
    ...mutaionResolvers.Mutation,
  },
};
