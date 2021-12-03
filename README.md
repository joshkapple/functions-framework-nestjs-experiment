# About
This repo is a  test for a set of GCP [Functions Framework](https://cloud.google.com/functions/docs/functions-framework) functions implemented with [nestjs.com](https://nestjs.com/).  
The project relies on the functions-framework to provide a common context for execution whether that is local or in a GCP product.

Based on this blog post: [https://fireship.io/snippets/setup-nestjs-on-cloud-functions/]()

## Project structure
    ./README.md                         # This readme file
    ./backend                           # The backend application composed of functions implemented with nestjs
    ./backend/src/                          # Typescript source files
    ./docker                            # Docker build contexts

# Prerequisites
- Install Node 14 and NPM [see recommended installs](#recommended-installs)
- Potentially create a GCP account for deployment

## Recommended installs
You may also want to install
- Node Version Manager [NVM](https://github.com/nvm-sh/nvm) (an .nvmrc file is included in the project)

# Getting started
- `cd` into the `./backend` folder that is a sibling to this README.md
- run `npm install`.
- run tsc in watch mode `npm run-script dev-watch`
- run functions framework in local development mode - `npm run-script ff-dev`
- visit your endpoints at [(http://localhost:8080/api/*)]


# Docker
## Build
- `cd` into the `/.backend` folder. (This gives Docker engine the context of the backend folder)
- `docker build --progress=plain --no-cache=true -t backend:test -f ../docker/backend-build/Dockerfile .`
  - where `backend` and `test` of `backend:test` are the image name and tag you wish to use

## Run
- `docker run -p 8080:8080 backend:test`

# GCP
## Pushing image to GCP
You can push an image from your local Docker image repo to GCP. 
See (https://cloud.google.com/artifact-registry/docs/docker/quickstart)[https://cloud.google.com/artifact-registry/docs/docker/quickstart]. 