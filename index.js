const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')
require('dotenv').config({path : "./.env"})
const resolvers = require("./graphql/resolvers/index")
//{ GraphQLServer, PubSub }
const prisma = new PrismaClient()

const server = new GraphQLServer({
    typeDefs: './graphql/schema.graphql',
    resolvers ,
    context: (request) => ({ ...request, prisma }),

})

server.start({
    port : 4000
},() => {
    console.log('The server is up!')
})