import React from 'react';
import {View, FlatList, StyleSheet, Text, Image} from 'react-native';
import {Caption} from 'react-native-paper';
import Footer from './Footer';
import Item from './Item';

export default class List extends React.Component {
  static defaultProps = {
    data: [],
  };

  _navigateToImageViewer = (source) => {
    this.props.viewImage(source);
  };
  _keyExtractor = (item) => String(item.key);
  _renderItem = ({item, index}) => {
    const {label, key, photo} = item;
    return (
      <Item
        label={label}
        step={index + 1}
        itemKey={key}
        photo={photo}
        viewImage={this._navigateToImageViewer}
      />
    );
  };
  _renderSeparator = () => <View style={styles.separator} />;
  _renderFooter = () => <Footer />;
  _renderHeader = () => (
    <View style={styles.header}>
      <Text style={styles.heading}>{this.props.title}</Text>
      {Boolean(this.props.category) && (
        <Caption style={styles.caption}>#{this.props.category}</Caption>
      )}
      <Image
        resizeMode="contain"
        style={styles.image}
        source={this.props.image || require('../../../assets/fish.png')}
        defaultSource={require('../../../assets/fish.png')}
      />
      <Text style={styles.ingredients}>{this.props.ingredients}</Text>
    </View>
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={
          this.props.title +
          this.props.category +
          this.props.ingredients +
          this.props.image
        }
        renderItem={this._renderItem}
        keyExtractor={this._keyExtractor}
        ListFooterComponent={this._renderFooter}
        ListHeaderComponent={this._renderHeader}
        ItemSeparatorComponent={this._renderSeparator}
      />
    );
  }
}

const styles = StyleSheet.create({
  separator: {
    height: 8,
  },
  header: {
    paddingBottom: 8,
  },
  heading: {
    fontSize: 27,
    fontWeight: 'bold',
  },
  caption: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    alignSelf: 'center',
  },
  ingredients: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
