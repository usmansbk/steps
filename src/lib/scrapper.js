import * as jsonld from 'jsonld';
import processor from './jsonld_processor';

export default async function scrapper(url) {
  let body = await fetch(url).then((res) => res.text());
  const scripts = ldjson_script(body);
  if (!scripts) {
    throw new Error('Unable to scrape this link');
  }
  const jsons = scripts.map(stripJson);
  const expanded_jsons = [];
  for (let i = 0; i < jsons.length; i++) {
    const expanded = await jsonld.expand(jsons[i]);
    expanded_jsons.push(expanded);
  }
  const process = await processor(expanded_jsons);
  if (!process) {
    throw new Error('Oops! I dont support this site, yet.');
  }
  return process;
}

// Extract the ldjson scripts from the html response
function ldjson_script(html) {
  const regex = /<script\stype=['"]application\/ld\+json['"].*?>[\w\W]+?<\/script>/gm;
  const matches = html.match(regex);
  return matches;
}

// extract the body of the script element which is a json string
function stripJson(script = '') {
  const start = script.indexOf('{');
  const stop = script.lastIndexOf('}') + 1;
  const _json = script.substring(start, stop);
  return JSON.parse(_json);
}

function getProcess(expanded_jsons) {
  console.log(JSON.stringify(expanded_jsons, null, 3));
  return null;
}
