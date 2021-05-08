FROM node:14-alpine

ENV ENV prod

WORKDIR /usr/src/app

COPY . .

RUN yarn

CMD [ "yarn", "start" ]
