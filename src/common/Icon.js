import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

export default ({name, ...rest}) => {
  const names = {
    add: 'plus',
    search: 'search1',
  };

  return <Icon name={names[name] || name} {...rest} />;
};
