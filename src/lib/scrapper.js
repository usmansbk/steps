import {getProcess} from './wikihow';

export default async function scrapper(url) {
  const body = await fetch(url).then((res) => res.text());
  const result = ldjson(body);
  if (!result) {
    throw new Error('Unable to scrape this link');
  }
  const process = getProcess(result.map(json));
  if (!process) {
    throw new Error('Oops! I dont support this site, yet.');
  }
  const {title, steps, category} = process;
  return {
    title,
    steps,
    category,
  };
}

// Extract the ldjson from the html response
function ldjson(text) {
  const regex = /<script\stype=["']application\/ld\+json["']>([\w\W]*?)<\/script>/gm;
  const matches = text.match(regex);
  return matches;
}

// extract the body of the script element which is a json string
function json(script = '') {
  const start = script.indexOf('>') + 1;
  const stop = script.lastIndexOf('<');
  const _json = script.substring(start, stop);
  return JSON.parse(_json);
}
