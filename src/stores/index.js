import HowToStore from './HowToStore';
import UIStore from './UIStore';

class RootStore {
  constructor() {
    this.howToStore = new HowToStore();
    this.uiStore = new UIStore();
  }
}

export default new RootStore();
