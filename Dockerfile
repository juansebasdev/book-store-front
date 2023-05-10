FROM node:19-alpine3.17 as dev
WORKDIR /app
COPY package.json .
RUN npm install
CMD [ "npm", "start" ]

FROM node:19-alpine3.17 as dev-deps
WORKDIR /app
COPY package.json .
RUN npm install --frozen-lockfile

FROM node:19-alpine3.17 as builder
WORKDIR /app
COPY --from=dev-deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

FROM nginx:1.23.4-alpine3.17 as prod
EXPOSE 80
COPY --from=builder /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
CMD [ "nginx", "-g", "daemon off;" ]%