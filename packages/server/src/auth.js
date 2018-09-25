const jwt = require('jsonwebtoken');

const userScopes = require('./modules/user/scopes');
const User = require('./modules/user/model');

const { JWT_SECRET } = process.env;

function encodeToken(user = {}) {
  const now = new Date();
  const token = jwt.sign(
    {
      sub: user.id,
      email: user.email,
      iat: now.getTime(),
    },
    JWT_SECRET,
    {
      expiresIn: '1y',
    }
  );
  return {
    token: `JWT ${token}`,
    user,
  };
}

function decodeToken(token = '') {
  return jwt.verify(token.substring(4), JWT_SECRET);
}

async function getUser(token = '') {
  if (!token) return { user: null };

  const decodedToken = decodeToken(token);
  const user = await User.findById(decodedToken.sub).exec();
  return user || null;
}

function isAuthenticated(request = {}) {
  return request && request.user !== null;
}

function isAuthorised(user, scope = []) {
  return Array.isArray(scope)
    ? scope.filter(value => -1 !== user.scopes.indexOf(value)).length > 0
    : user.scopes.includes(scope);
}

module.exports = {
  encodeToken,
  decodeToken,
  getUser,
  isAuthorised,
  isAuthenticated,
  scopes: {
    user: userScopes,
  },
};
