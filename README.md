# sakura sapper app

This app is supposed to serve as UI for our shopify plugin


## configuration changes

in order to be served with sakura.eco/shopify3 prefix a few modification were done in the original configuration files:

package.json

    "export": "sapper export --basepath /shopify3",


src/server.js

 .use(
    '/shopify3',

## install dependencies

npm install


## run in development mode

npm run dev

open browser on 127.0.0.1:3000/shopify3


## export static files 

npm run export

