const getUserId = require("./../../util/getUserId");

module.exports = {
  Subscription: {
    newMessage: {
      subscribe(parent, args, { pubsub }, info) {
        return pubsub.asyncIterator("NEW_MESSAGE");
      },
    },
  },
};
