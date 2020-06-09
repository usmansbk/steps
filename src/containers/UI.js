import {Container} from 'unstated';

export default class UIContainer extends Container {
  state = {
    firstLaunch: true,
    userName: 'Friend',
  };

  setName = (userName) => {
    this.setState({userName});
  };

  toggleFirstLaunch = () => {
    this.setState({firsLaunch: false});
  };
}
