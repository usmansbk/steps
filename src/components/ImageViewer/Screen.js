import React from 'react';
import {Image} from 'react-native';

export default ({route}) => {
  const source = route.params.source;
  return <Image source={source} resizeMode="contain" />;
};
