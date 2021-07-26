const { prisma } = require("@prisma/client");
const generateToken = require("./../../util/generateToken");
const getUserId = require("./../../util/getUserId");

module.exports = {
  Query: {
    getMessages: async (parent, args, context, info) => {
      const userId = getUserId(context.request);
      if (!userId) throw new Error("Please Login!");
      const messages = await context.prisma.message.findMany({
        orderBy: {
          createdAt: "asc",
        },
        where: {
          OR: [
            {
              senderId: userId,
              receiverId: args.with,
            },
            {
              senderId: args.with,
              receiverId: userId,
            },
          ],
        },
      });
      return messages;
    },
  },
};
