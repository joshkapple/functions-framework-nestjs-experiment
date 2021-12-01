# About
This repo is a  test for a set of [firebase](https://firebase.google.com/) cloud functions implemented with [nestjs.com](https://nestjs.com/). 
Based on this blog post: [https://fireship.io/snippets/setup-nestjs-on-cloud-functions/]()

## Project structure
    ./README.md                         # This readme file
    ./backend                           # The backend application composed of firebase functions implemented with nestjs
    ./backend/src/                          # Typescript source files
    ./backend/.firebaserc.example           # Example config for .firebaserc

# Prerequisites
- Install Node v12.21 and NPM [see recommended installs](#recommended-installs)
- Install Google Firebase CLI `npm i -g firebase-tools`
- Google account and Firebase project created - [firebase.google.com](https://firebase.google.com/)

# Getting started
- `cd` into the `./backend` folder that is a sibling to this README.md
- run `npm install`.
- sign into your firebase account `firebase login`
- following the example in `./backend/.firebaserc.example`, change the project id to your firebase project id and copy the contents into a new file `./backend/.firebaserc` - this file is git ignored
- run tsc in watch mode `npm run-script dev-watch`
- run firebase in local development mode - `npm run-script firebase-local`
- visit your endpoints at [(http://localhost:5000/<your project id>/us-central1/api)]

### Recommended installs
You may also want to install
- [NVM](https://github.com/nvm-sh/nvm) (an .nvmrc file is included)
