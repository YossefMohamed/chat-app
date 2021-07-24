const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
module.exports = {
  Query: {
    getUsers: async (parent ,args,context,info )=>{
        console.log(context.prisma)
        return [
            {
              username: 'john',
              email: 'john@email.com',
              imageUrl:
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80',
              
            },
            {
              username: 'jane',
              email: 'jane@email.com',
              imageUrl:
                'https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2190&q=80',
              
            },
            {
              username: 'boss',
              email: 'boss@email.com',
              imageUrl:
                'https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2122&q=80',
              
            },
          ]
    }}}