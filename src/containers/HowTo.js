import shortid from 'shortid';
import dayjs from 'dayjs';

export class Step {
  id = null;
  label = null;
  photo = null;

  constructor(label, photo) {
    this.label = label;
    this.key = this.id = shortid.generate();
    this.photo = photo;
  }
}
export default class HowToContainer {
  constructor(json) {
    this.id = json.id || shortid.generate();
    this.title = json.title;
    this.category = json.category;
    this.date = dayjs().toISOString();
    this.steps = json.steps;
  }
}
