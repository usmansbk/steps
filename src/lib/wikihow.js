import shortid from 'shortid';

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