const bcrypt = require('bcryptjs')
const generateToken = require('./../../util/generateToken')
const {hashPassword} = require("./../../util/hashPassword")
module.exports = {
  Mutation: {
      register : async (parent , args , context , info) => {

          if(args.password !== args.confirmPassword) throw new Error("Password Doesn't match!")
          if(!((/^[^\s@]+@[^\s@]+\.[^\s@]+$/).test(args.email))) throw new Error("Invalid Email!")
          args.password =await hashPassword(args.password)
          args.confirmPassword = undefined
          const user = await context.prisma.user.create({
              data :{
                  ...args
                }
            })
            const token = generateToken(user.id)
          return {
              user ,
              token
          }
      }
  }


}