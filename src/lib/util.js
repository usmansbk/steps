export function filterByQuery(data, query) {
  const searchRegex = /(#\w+\S)?\s?([\w\s\W]+)/gi;

  const matches = searchRegex.exec(query);
  return data.filter((item) => {
    let matchCategory = true;
    let matchTitle = true;
    if (matches) {
      const [, category, title] = matches;
      matchTitle = item.title.toLocaleLowerCase().includes(title);
      if (category) {
        let cat = category.slice(1);
        matchCategory = item.category.toLocaleLowerCase().includes(cat);
      }
    }
    return matchCategory && matchTitle;
  });
}

export function exportRecipeAsText(item) {
  let subject;
  const title = (subject = item.title);
  const message = extractMessage(item);
  const content = {
    message,
    title,
  };
  const options = {
    subject,
    dialogTitle: 'Share instructions via',
  };

  return [content, options];
}

function extractMessage({title, steps, category = []}) {
  let message = '';
  if (title) {
    message = `[${title}\n]`;
  }
  if (category) {
    message += `${category}\n`;
  }
  steps.forEach((step) => {
    if (step.label) {
      message += `\n${step.label}\n`;
    }
  });
  return message;
}
