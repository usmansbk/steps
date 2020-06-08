import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import Empty from './Empty';
import Item from './Item';
import data from './data';

export default class List extends React.Component {
  _renderItem = ({item}) => {
    const {title, date} = item;
    return <Item title={title} date={date} />;
  };

  _renderEmpty = () => <Empty />;
  _keyExtractor = (item) => item.id;

  render() {
    return (
      <FlatList
        data={data}
        keyExtractor={this._keyExtractor}
        contentContainerStyle={styles.container}
        renderItem={this._renderItem}
        ListEmptyComponent={this._renderEmpty}
        ListHeaderComponent={this._renderHeader}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontWeight: 'bold',
  },
});
