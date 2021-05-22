FROM node:14-alpine as build

ENV ENV prod

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html/

COPY nginx.conf /etc/nginx/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
