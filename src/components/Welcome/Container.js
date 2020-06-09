import React from 'react';
import {Subscribe} from 'unstated';
import Screen from './Screen';
import UI from '../../containers/UI';

export default ({navigation}) => {
  return (
    <Subscribe to={[UI]}>
      {(ui) => <Screen navigation={navigation} ui={ui} />}
    </Subscribe>
  );
};
