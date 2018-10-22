require('dotenv').config();

const { MONGODB_URI, NODE_ENV = 'development', PORT = 4000 } = process.env;
const logger = require('./logger');
const server = require('./server');
const { connectDatabase } = require('./database');

(async () => {
  try {
    await connectDatabase(MONGODB_URI, NODE_ENV !== 'production');
  } catch (error) {
    logger.error('Could not connect to database', { error });
    throw error;
  }

  const { url } = await server.listen(PORT);

  logger.info(`🚀 Server ready at ${url}/graphql`);
})();
