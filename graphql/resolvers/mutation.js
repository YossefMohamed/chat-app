const bcrypt = require("bcryptjs");
const generateToken = require("./../../util/generateToken");
const { hashPassword } = require("./../../util/hashPassword");
const getUserId = require("./../../util/getUserId");

module.exports = {
  Mutation: {
    register: async (parent, args, context, info) => {
      if (args.password !== args.confirmPassword)
        throw new Error("Password Doesn't match!");
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(args.email))
        throw new Error("Invalid Email!");
      args.password = await hashPassword(args.password);
      args.confirmPassword = undefined;
      const user = await context.prisma.user.create({
        data: {
          ...args,
        },
      });
      const token = generateToken(user.id);
      return {
        user,
        token,
      };
    },
    updateUser: async (parent, args, context, info) => {
      const userId = getUserId(context.request);
      if (!userId) throw new Error("Please Login!");
      console.log(args);
      if (args.password) args.password = await hashPassword(args.password);
      const updateUser = await context.prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          ...args,
        },
      });
      return {
        user: updateUser,
        token: context.request.headers.authorization.split(" ")[1],
      };
    },
    deleteUser: async (parent, args, context, info) => {
      const userId = getUserId(context.request);
      if (!userId) throw new Error("Please Login!");
      const deletedUser = await context.prisma.user.delete({
        where: {
          id: userId,
        },
      });
      return { deletedUser: "As" };
    },
    sendMessage: async (parent, args, context, info) => {
      const userId = getUserId(context.request);
      if (!userId) throw new Error("Please Login!");
      const message = await context.prisma.message.create({
        data: {
          content: args.content,
          senderId: userId,
          receiverId: args.to,
        },
        // include: {
        //   createdAt:true
        //   message
        // }
      });
      //sendid
      console.log(message);
      return message;
    },
    updateMessage: async (parent, args, context, info) => {
      const userId = getUserId(context.request);
      if (!userId) throw new Error("Please Login!");
      const updatedMessageFind = await context.prisma.message.findUnique({
        where: {
          id: args.messageId,
        },
      });
      if (!updatedMessageFind) throw new Error("Message not found!");
      if (updatedMessageFind.senderId !== userId)
        throw new Error("unauthorized");
      const updatedMessage = await context.prisma.message.update({
        where: {
          id: args.messageId,
        },
        data: {
          ...updatedMessageFind,
          content: args.content,
        },
      });
      return updatedMessage;
    },
    deleteMessage: async (parent, args, context) => {
      const userId = getUserId(context.request);
      if (!userId) throw new Error("Please Login!");
      const deletedMessageFind = await context.prisma.message.findUnique({
        where: {
          id: args.messageId,
        },
      });
      if (!deletedMessageFind) throw new Error("Message not found!");

      if (deletedMessageFind.senderId !== userId)
        throw new Error("unauthorized");
      const deletedMessage = await context.prisma.message.delete({
        where: {
          id: args.messageId,
        },
      });
      return deletedMessage;
    },
  },
};
