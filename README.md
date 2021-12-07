# About
This repo is a test for a set of GCP [Functions Framework](https://cloud.google.com/functions/docs/functions-framework) functions implemented with [nestjs.com](https://nestjs.com/).  
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
- Docker
- [Buildpack](https://buildpacks.io/docs/tools/pack/)

# Getting started
- `cd` into the `./backend` folder that is a sibling to this README.md
- run `npm install`.
- run in development mode `npm run-script start:dev`
- visit your endpoints at http://localhost:8080/ and http://localhost:8080/api

# Docker
## Build
- `cd` into the `./` root folder. (This gives Docker engine the context of the root folder)
- `docker build --progress=plain --no-cache=true -t backend:test -f ./docker/backend-build/Dockerfile .`
  - where `backend` and `test` of `backend:test` are the image name and tag you wish to use
- `docker image ls` should show your new image

## Run
- `docker run -p 8080:8080 backend:test`

# Buildpack
As an alternative to the included Dockerfile, buildpack can also be used for producing a docker image.  
`./package.json` and `./backend/package.json` support building with [Buildpack](https://buildpacks.io/docs/tools/pack/) too.  
Install build pack via the link above then run the builder from the root of the project
- `pack build pack-backend --builder gcr.io/buildpacks/builder`

After this step a docker image called `pack-backend` should be available via `docker image ls`

# GCP
## Pushing image to GCP
You can push an image from your local Docker image repo to GCP. 
See (https://cloud.google.com/artifact-registry/docs/docker/quickstart)[https://cloud.google.com/artifact-registry/docs/docker/quickstart]. 