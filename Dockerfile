FROM node:latest

WORKDIR /home/node/app

COPY ./ ./

RUN npm install

RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache


CMD [ "npm",  "start" ]