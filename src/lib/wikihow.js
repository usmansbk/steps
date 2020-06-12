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
      // Add image to the recipe
      if (image) {
        steps.push({
          photo: {
            uri: image.url,
          },
          label: ingredients,
        });
      }
      steps = steps.concat(process(step));
      return {
        title: name,
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
