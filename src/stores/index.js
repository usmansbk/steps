import HowToStore from './HowToStore';
import UIStore from './UIStore';

class RootStore {
  constructor() {
    this.howToStore = new HowToStore(this);
    this.uiStore = new UIStore(this);
  }
}

export default new RootStore();
