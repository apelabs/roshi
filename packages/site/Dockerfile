FROM node:10.9

# Create app directory
RUN mkdir -p /usr/src/site
WORKDIR /usr/src/site

# add `/usr/src/site/node_modules/.bin` to $PATH
ENV PATH /usr/src/site/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json /usr/src/site/
RUN npm install --quiet

# Bundle app source
COPY . /usr/src/site

EXPOSE 3000
CMD [ "npm", "run", "dev" ]
