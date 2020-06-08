import {observable} from 'mobx';

export default class UIStore {
  @observable firstLaunch = true;
  @observable userName = 'Friend';
  @observable searchQuery = '';
  @observable draft = {
    title: '',
    steps: [],
  };

  setDraft(howto) {
    this.draft = howto;
  }

  toggleFirstLaunch() {
    this.firstLaunch = false;
  }
}
