FROM node:14

WORKDIR /usr/src/app

COPY . .
RUN npm install -g nodemon
RUN npm install

EXPOSE 8800

CMD [ "nodemon", "server.js" ]