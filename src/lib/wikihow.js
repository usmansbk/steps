import shortid from 'shortid';

/**
 * This module extracts recipes from 'wikihow.com` site
 */
export function getProcess(data) {
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
      steps = steps.concat(process(step));
      return {
        title: name,
        category,
        steps,
      };
    }
  }
  return null;
}

function process(step = []) {
  let steps = [];

  step.forEach((item) => {
    const type = item['@type'];
    if (type === 'HowToSection') {
      steps = steps.concat(process(item.itemListElement));
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
