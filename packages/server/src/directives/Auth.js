const { SchemaDirectiveVisitor, AuthenticationError } = require('apollo-server');

const { isAuthorised, isAuthenticated } = require('../auth');

class RequireAuthDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve = defaultFieldResolver } = field;
    const { scope } = this.args;

    field.resolve = async function(...args) {
      const [, , { req }] = args;

      if (isAuthenticated(req)) {
        if (!isAuthorised(req.user, scope)) {
          throw new AuthenticationError('You are not authorized to view this resource.');
        } else {
          const result = await resolve.apply(this, args);
          return result;
        }
      } else {
        throw new AuthenticationError('You must be signed in to view this resource.');
      }
    };
  }
}

module.exports = RequireAuthDirective;
