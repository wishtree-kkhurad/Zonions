const bcrypt = require('bcrypt-nodejs')
module.exports = {

    friendlyName: 'Login',
  
    description: 'Login user.',
  
    inputs: {
  
      email: {
        type: 'string',
        required: true,
      },
      password: {
        type: 'string',
        required: true,
      },
    },
    exits: {
  
      success: {
        description: 'Login successful',
      },
      notAUser: {
        statusCode: 404,
        description: 'User not found',
      },
      passwordMismatch: {
        statusCode: 401,
        description: 'Password do not match',
      },
      operationalError: {
        statusCode: 400,
        description: 'The request was not formed properly'
      }
    },
  
  
    fn: async function (inputs, exits) {
      try {
  
        const user = await User.findOne({ email: inputs.email });
  
        console.log('found user', user);
  
        if (!user) {
          return exits.notAUser({
            error: `An account belonging to ${inputs.email} was not found`,
          });
        }

        await sails.helpers.passwords
        .checkPassword(inputs.password, user.password)
        .intercept('incorrect', (error) => {
            Logger.debug('Login.js at intercept handler')
            exits.passwordMismatch({ error: error.message });
        });

          const token = await sails.helpers.generateNewJwtToken(user.email);

          this.req.me = user;
          return exits.success({
            message: `${user.email} has been logged in`,
            data: user,
            token,
          });
      }
      catch (error) {
        sails.log.error(error);

        if (error.isOperational) {
          return exits.operationalError({
            message: `Error logging in user ${inputs.email}`,
            error: error.raw,
          });
        }
        return exits.error({
          message: `Error logging in user ${inputs.email}`,
          error: error.message,
        });
  
      }
  
    }
  };