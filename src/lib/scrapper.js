import {getProcess} from './wikihow';

export default async function scrapper(url) {
  const body = await fetch(url)
    .then((res) => res.text())
    .then(ldjson);
  if (!body) {
    throw new Error('Unable to scrape this link');
  }
  const process = getProcess(body.map(stripJson));
  if (!process) {
    throw new Error('Oops! I dont support this site, yet.');
  }
  return process;
}

// Extract the ldjson from the html response
function ldjson(text) {
  const regex = /<script\stype=["']application\/ld\+json["']>([\w\W]*?)<\/script>/gm;
  const matches = text.match(regex);
  return matches;
}

// extract the body of the script element which is a json string
function stripJson(script = '') {
  const start = script.indexOf('>') + 1;
  const stop = script.lastIndexOf('<');
  const _json = script.substring(start, stop);
  return JSON.parse(_json);
}
