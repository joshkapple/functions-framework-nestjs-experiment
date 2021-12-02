# About
This repo is a  test for a set of GCP [Functions Framework](https://cloud.google.com/functions/docs/functions-framework) functions implemented with [nestjs.com](https://nestjs.com/). 
Based on this blog post: [https://fireship.io/snippets/setup-nestjs-on-cloud-functions/]()

## Project structure
    ./README.md                         # This readme file
    ./backend                           # The backend application composed of functions implemented with nestjs
    ./backend/src/                          # Typescript source files

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
- run functions framework in local development mode - `npm run-script ff-local`
- visit your endpoints at [(http://localhost:8080/api/*)]
