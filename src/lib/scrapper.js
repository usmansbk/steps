import shortid from 'shortid';

export default async function scrapper(url) {
  const body = await fetch(url).then((res) => res.text());
  const result = ldjson(body);
  if (!result) {
    throw new Error('Unable to scrape this link');
  }
  const process = getProcess(result.map(json));
  if (!process) {
    throw new Error('Oops! I dont support this page, yet.');
  }
  const {title, steps, category} = process;
  return {
    title,
    steps,
    category,
  };
}

function getProcess(data) {
  if (Array.isArray(data)) {
    const howTo = data.find((item) => item['@type'] === 'HowTo');
    if (howTo) {
      const {name, step, image} = howTo;
      const category = howTo['@type'];
      let steps = [];
      // Add image to the recipe
      if (image) {
        steps.push({
          photo: {
            uri: image.url,
          },
        });
      }
      steps = steps.concat(processStep(step));
      return {
        title: name,
        category,
        steps,
      };
    }
  }
  return null;
}

function processStep(step = []) {
  const steps = [];
  step.forEach((item) => {
    const type = item['@type'];
    if (type === 'HowToSection') {
      const {itemListElement} = item;
      itemListElement.forEach((elem) => {
        steps.push({
          key: shortid.generate(),
          label: elem.text,
          photo: {
            uri: elem.image,
          },
        });
      });
    } else {
      steps.push({
        key: shortid.generate(),
        label: item.text,
        photo: {
          uri: item.image,
        },
      });
    }
  });
  return steps;
}

function ldjson(text) {
  const regex = /<script\stype=["']application\/ld\+json["']>([\w\W]*?)<\/script>/gm;
  const matches = text.match(regex);
  return matches;
}

function json(script = '') {
  const start = script.indexOf('>') + 1;
  const stop = script.lastIndexOf('<');
  const _json = script.substring(start, stop);
  return JSON.parse(_json);
}
