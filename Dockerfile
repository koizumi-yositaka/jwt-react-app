FROM node:20.12.2-slim as build-stage
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21.5 as production-stage
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /var/www
EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
