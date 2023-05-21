FROM node:latest

WORKDIR /home/node/app

COPY ./ ./

RUN npm install

CMD [ "npm",  "start" ]