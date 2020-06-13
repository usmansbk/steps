import {Platform} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {VALUE} from './constants';

export function filterByQuery(data, query) {
  return data.filter((item) => {
    const title = item.title.toLocaleLowerCase();
    const category = item.category.toLocaleLowerCase();
    return title.includes(query) || category.includes(query);
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
    message = `${title}\n`;
  }
  if (category) {
    message += `(${category})\n`;
  }
  steps.forEach((step) => {
    if (step.label) {
      message += `\n${step.label}\n`;
    }
  });
  return message;
}

const options = {
  title: 'Select Picture',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export function pickImage(callback) {
  ImagePicker.showImagePicker(options, (response) => {
    if (!(response.error || response.didCancel)) {
      let uri = '';
      if (Platform.OS === 'android') {
        uri = 'file:///' + response.path;
      } else {
        uri = response.uri;
      }
      const source = {uri};
      callback(source);
    }
  });
}

export function first(array) {
  return array[0];
}

export function value(obj, key = VALUE) {
  return obj[key];
}
