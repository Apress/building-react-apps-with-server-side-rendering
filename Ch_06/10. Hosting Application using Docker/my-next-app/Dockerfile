# base image
FROM node:alpine

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src

# Install dependencies
COPY package.json /usr/src
RUN npm install

# Bundle app source
COPY . /usr/src

# start app

RUN npm run build
EXPOSE 3000

CMD ["npm", "start"]