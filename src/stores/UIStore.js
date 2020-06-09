import {observable} from 'mobx';

export default class UIStore {
  @observable firstLaunch = true;
  @observable userName = 'Friend';
  @observable searchQuery = '';
  @observable draft = {
    title: '',
    steps: [],
  };

  constructor() {
    this.userName = 'Friend-test';
    this.firstLaunch = true;
    this.searchQuery = '';
  }

  setDraft(howto) {
    this.draft = howto;
  }

  toggleFirstLaunch() {
    this.firstLaunch = false;
  }
}
