import shortid from 'shortid';
import dayjs from 'dayjs';

export class Step {
  id = null;
  label = null;
  constructor(label) {
    this.label = label;
    this.key = this.id = shortid.generate();
  }
}
export default class HowToContainer {
  constructor(json) {
    this.id = json.id || shortid.generate();
    this.title = json.title;
    this.date = dayjs().toISOString();
    this.steps = json.steps;
  }
}
