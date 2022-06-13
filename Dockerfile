# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY ./babel.config.js ./
COPY ./src ./src
COPY ./public ./public
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY ./build_scripts/nginx.conf /etc/nginx/nginx.conf
COPY ./build_scripts/default.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 8080