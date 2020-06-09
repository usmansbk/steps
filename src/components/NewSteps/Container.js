import React from 'react';
import {Subscribe} from 'unstated';
import Screen from './Form';
import Draft from '../../containers/Draft';
import HowTos from '../../containers/HowTos';

export default ({navigation, route}) => {
  return (
    <Subscribe to={[Draft, HowTos]}>
      {(draft, howTos) => (
        <Screen
          route={route}
          navigation={navigation}
          howTos={howTos}
          draft={draft}
        />
      )}
    </Subscribe>
  );
};
