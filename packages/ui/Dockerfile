FROM node:10.9

# Create app directory
RUN mkdir -p /usr/src/ui
WORKDIR /usr/src/ui

# add `/usr/src/ui/node_modules/.bin` to $PATH
ENV PATH /usr/src/ui/node_modules/.bin:$PATH

# Install app dependencies
COPY package.json /usr/src/ui/
RUN npm install --quiet

# Bundle app source
COPY . /usr/src/ui

EXPOSE 9009 6060 3000
CMD [ "npm", "run", "dev" ]