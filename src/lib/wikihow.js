import shortid from 'shortid';

/**
 * This module extracts recipes from 'wikihow.com` site
 */
export function getProcess(data) {
  if (Array.isArray(data)) {
    const recipe = data.find((item) => item['@type'] === 'Recipe') || {};
    const howTo = data.find((item) => item['@type'] === 'HowTo');
    if (howTo) {
      console.log(JSON.stringify(howTo, null, 2));
      const {name, step, image} = howTo;
      let steps = [];
      let ingredients = recipe.recipeIngredient.join('\n');
      steps = steps.concat(process(step));
      return {
        title: name,
        image: {
          uri: image.url,
        },
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
        photo: {
          uri: item.image,
        },
      });
    }
  });

  return steps;
}
