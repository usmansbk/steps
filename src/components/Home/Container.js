import React from 'react';
import {Subscribe} from 'unstated';
import Screen from './Screen';
import UI from '../../containers/UI';
import HowTos from '../../containers/HowTos';

export default ({navigation}) => {
  return (
    <Subscribe to={[UI, HowTos]}>
      {(ui, howTos) => (
        <Screen navigation={navigation} ui={ui} howTos={howTos} />
      )}
    </Subscribe>
  );
};
