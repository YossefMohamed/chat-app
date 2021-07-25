const bcrypt = require('bcryptjs')
const generateToken = require('./../../util/generateToken')
const {matchPassword} = require("./../../util/hashPassword")
module.exports = {
  Query : {

getUsers : async (parent , args,context,info) => {
    const users = await context.prisma.user.findMany()
    console.log(users)
    return users
}
,
login : async (parant , args, context , info) => {
            const  { email , password} = args
            const user = await context.prisma.user.findUnique({
  where: {
    email
  },
})
if(!user) throw new Error("Email or Password Are Incorrect")
const checkPassword= await matchPassword(password,user.password)
console.log(checkPassword)
if(!checkPassword || !user) throw new Error("Email or Password Are Incorrect")
const token = generateToken(user.id)
return {user
,token
}


        }



} }