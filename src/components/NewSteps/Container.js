import React from 'react';
import {Subscribe} from 'unstated';
import Screen from './Form';
import HowTos from '../../containers/HowTos';

export default ({navigation, route}) => {
  return (
    <Subscribe to={[HowTos]}>
      {(howTos) => (
        <Screen route={route} navigation={navigation} howTos={howTos} />
      )}
    </Subscribe>
  );
};
