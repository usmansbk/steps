import {observable} from 'mobx';

export default class UIStore {
  @observable firstLaunch = true;
  @observable userName = 'Friend';
  @observable searchQuery = '';
  @observable draft = null;
}
