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
