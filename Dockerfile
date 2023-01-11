# FROM nginx:latest
# WORKDIR /usr/share/nginx/html/
# ADD src/ .


# FROM node:16
# WORKDIR /app
# COPY ./.helm/30-fix-front-url.sh .
# RUN chmod +x 30-fix-front-url.sh
# ADD package.json yarn.lock ./
# RUN yarn install
# COPY . .
# RUN yarn build && rm -rf dist/js/*.js.map

# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM node:16 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY ./ /app/
RUN npm run build



FROM nginx:stable-alpine
# COPY --from=0 --chown=nginx /app/dist /usr/share/nginx/html
COPY --from=build-stage --chown=nginx /app/build/ /usr/share/nginx/html
COPY   --from=build-stage  ./app/.helm/nginx.conf /etc/nginx/conf.d/default.conf


# COPY --chown=nginx ./.helm/30-fix-front-url.sh /docker-entrypoint.d/
# COPY --from=0 --chown=nginx /app/30-fix-front-url.sh /docker-entrypoint.d/
EXPOSE 8080
