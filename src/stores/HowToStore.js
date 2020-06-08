import {observable, computed} from 'mobx';
import shortid from 'shortid';
import dayjs from 'dayjs';

export default class HowToStore {
  @observable data = [];

  createHowTo(json) {
    const howto = new HowTo(this, json);
    this.data.push(howto);
    return howto;
  }

  removeHowTo(howto) {
    this.data.splice(this.data.indexOf(howto.id), 1);
  }

  updateHowTo(json) {
    const howto =
      json.id && this.data.find((current) => current.id === json.id);
    if (howto) {
      howto.updateFromJson(json);
    } else {
      this.createHowTo(json);
    }
  }
}

export class HowTo {
  id = null;

  @observable title = '';
  @observable steps = [];

  constructor(store, json) {
    this.store = store;
    this.id = shortid.generate();
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
