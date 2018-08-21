FROM node:10.9

# Create app directory
RUN mkdir -p /usr/src/clientweb
WORKDIR /usr/src/clientweb

# add `/usr/src/clientweb/node_modules/.bin` to $PATH
ENV PATH /usr/src/clientweb/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json /usr/src/clientweb/
RUN npm install --quiet

# Bundle app source
COPY . /usr/src/clientweb

EXPOSE 3000
CMD [ "npm", "run", "dev" ]