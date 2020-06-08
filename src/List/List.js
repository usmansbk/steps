import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';
import Empty from './Empty';

export default class List extends React.Component {
  _renderItem = () => {
    return <Text>Item</Text>;
  };

  _renderEmpty = () => <Empty />;

  render() {
    return (
      <FlatList
        data={[]}
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
