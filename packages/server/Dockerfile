FROM node:10.9

# Create app directory
RUN mkdir -p /usr/src/server
WORKDIR /usr/src/server

# add `/usr/src/server/node_modules/.bin` to $PATH
ENV PATH /usr/src/server/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json /usr/src/server/
RUN npm install --quiet

# Bundle app source
COPY . /usr/src/server

EXPOSE 4000
CMD [ "npm", "run", "dev" ]