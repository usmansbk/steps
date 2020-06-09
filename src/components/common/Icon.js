import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

export default ({name, source, size, ...rest}) => {
  if (source) {
    return <ImageIcon source={source} size={size} />;
  }

  const names = {
    add: 'plus',
    search: 'search1',
  };

  return <Icon name={names[name] || name} size={size} {...rest} />;
};

export const ImageIcon = ({source, size}) => {
  const style = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  return <Image source={source} style={style} />;
};
