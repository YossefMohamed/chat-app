const userResolvers = require('./user')
const mutaionResolvers = require('./mutation')

module.exports = {
    Query : {
...userResolvers.Query
    },Mutation:{
        ...mutaionResolvers.Mutation
    }
  }