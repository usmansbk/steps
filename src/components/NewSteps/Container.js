import React from 'react';
import {Subscribe} from 'unstated';
import Screen from './Form';
import Draft from '../../containers/Draft';

export default ({navigation, route}) => {
  return (
    <Subscribe to={[Draft]}>
      {(draft) => (
        <Screen route={route} navigation={navigation} draft={draft} />
      )}
    </Subscribe>
  );
};
