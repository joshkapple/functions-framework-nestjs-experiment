# This dockerfile expects its build context to be that of ./backend
# `docker build -t backend:latest -f ../docker/backend-build/Dockerfile .`

# TODO needs optimization, this results in an image ~1.5GB
# See https://medium.com/trendyol-tech/how-we-reduce-node-docker-image-size-in-3-steps-ff2762b51d5a

# Source image
FROM node:14

# Run container process under the root context
USER root

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install --only=production

# copy src code
COPY . /usr/src/app
RUN npm run-script build
RUN ls


# Ensure tcp/8080 is exposed and exec
EXPOSE 8080
CMD [ "npm", "run-script", "ff-prod" ]
