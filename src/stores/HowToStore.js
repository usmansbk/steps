import {observable, computed} from 'mobx';
import {nanoid} from 'nanoid';
import dayjs from 'dayjs';

export default class HowToStore {
  @observable data = [];

  createHowTo(json) {
    const steps = new HowTo(this, json);
    this.data.push(steps);
    return steps;
  }

  removeHowTo(howto) {
    this.data.splice(this.data.indexOf(howto.id), 1);
  }

  updateHowTo(json) {
    const howto = this.data.find((current) => current.id === json.id);
    if (howto) {
      howto.updateFromJson(json);
    }
  }
}

export class HowTo {
  id = null;

  @observable title = '';
  @observable steps = [];

  constructor(store, json) {
    this.store = store;
    this.id = nanoid();
    this.date = dayjs().toISOString();
    this.title = json.title;
    this.steps = json.steps;
  }

  delete() {
    this.store.removeHowTo(this);
  }

  @computed get asJson() {
    return {
      id: this.id,
      title: this.title,
      date: dayjs(this.date).format('MMM D YYYY HH:MM'),
      steps: this.steps,
    };
  }

  updateFromJson(json) {
    this.title = json.title;
    this.steps = json.steps;
    this.date = dayjs().toISOString();
  }
}
