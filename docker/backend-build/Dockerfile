# This dockerfile expects its build context to be that of ./
# `docker build -t backend:latest -f ./docker/backend-build/Dockerfile .`

# Source image
FROM node:14

# Run container process under the root context
USER root

ENV npm_config_unsafe_perm=true

# Create app directory
WORKDIR /usr/src/app

# copy src code
COPY . /usr/src/app
RUN npm install

# second-stage, less dependencies needed after build
FROM node:14-alpine
WORKDIR /
COPY --from=0 /usr/src/app/backend /usr/src/app/backend
WORKDIR /usr/src/app/backend
RUN npm install --only=prod

# Ensure tcp/8080 is exposed and exec
EXPOSE 8080
CMD [ "npm", "run-script", "start" ]
