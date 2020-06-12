import shortid from 'shortid';

/**
 * This module extracts recipes from 'wikihow.com` site
 */
export function getProcess(data) {
  if (Array.isArray(data)) {
    const recipe = data.find((item) => item['@type'] === 'Recipe') || {};
    const howTo = data.find((item) => item['@type'] === 'HowTo');
    if (howTo) {
      const {name, step, image} = howTo;
      let steps = [];
      let ingredients = recipe.recipeIngredient.join('\n');
      steps = steps.concat(process(step));
      return {
        title: name,
        image:
          image && image.url
            ? {
                uri: image.url,
              }
            : null,
        ingredients,
        category: recipe.recipeCategory || howTo['@type'],
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
      const id = shortid.generate();
      steps.push({
        id,
        key: id,
        label: item.text,
        photo: item.image
          ? {
              uri: item.image,
            }
          : null,
      });
    }
  });

  return steps;
}
