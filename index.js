#!/usr/bin/env node

const inputUrl = process.argv.slice(2)[0];
const url = require('url');
const querystring = require('querystring')

if(!inputUrl) {
  throw new Error('URL Required');
}

let parsed = url.parse(inputUrl, true);

//remove empty query params
for(const key in parsed.query) {
  if(!parsed.query[key].length) {
    delete parsed.query[key];
  }
}

//replace original url object with empty query params removed
parsed.search = querystring.stringify(parsed.query);

//returns stream to stdout
process.stdout.write(url.format(parsed));
