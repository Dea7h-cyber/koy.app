FROM node:14-alpine

ENV ENV=prod

WORKDIR /app

COPY . .

RUN yarn

CMD [ "yarn", "start" ]
