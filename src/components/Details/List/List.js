import React from 'react';
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  Image,
} from 'react-native';
import {Caption} from 'react-native-paper';
import Footer from './Footer';
import Item from './Item';
import Fab from '../../common/Fab';
import {colors} from '../../../config/theme';

export default class List extends React.Component {
  static defaultProps = {
    data: [],
  };
  state = {
    offsetY: 0,
  };

  _listRef = (ref) => {
    this.list = ref;
  };

  _onScroll = (event) => {
    this.setState({
      offsetY: event.nativeEvent.contentOffset.y,
    });
  };

  _scrollToTop = () => this.list.scrollToIndex({index: 0});

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
      <TouchableOpacity
        onPress={() => this._navigateToImageViewer(this.props.image)}>
        <Image
          resizeMode={this.props.image ? 'cover' : 'contain'}
          style={styles.image}
          source={this.props.image || require('../../../assets/fish.png')}
          defaultSource={require('../../../assets/fish.png')}
        />
      </TouchableOpacity>
      {Array.isArray(this.props.ingredients) && (
        <View style={styles.ingredients}>
          {this.props.ingredients.map((ingredient) => (
            <Text style={styles.label}>{ingredient}</Text>
          ))}
        </View>
      )}
    </View>
  );

  render() {
    return (
      <>
        <FlatList
          data={this.props.data}
          extraData={
            this.props.title +
            this.props.category +
            this.props.ingredients +
            this.props.image
          }
          initialNumToRender={1}
          ref={this._listRef}
          onScroll={this._onScroll}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          ListFooterComponent={this._renderFooter}
          ListHeaderComponent={this._renderHeader}
          ItemSeparatorComponent={this._renderSeparator}
        />
        {Boolean(this.state.offsetY > 700) && (
          <Fab small style={styles.fab} icon="up" onPress={this._scrollToTop} />
        )}
      </>
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
    marginVertical: 8,
    borderRadius: 16,
    alignSelf: 'center',
  },
  ingredients: {
    paddingVertical: 12,
    backgroundColor: colors.lightGray,
    borderRadius: 8,
  },
  label: {
    color: '#2d3436',
    padding: 8,
    fontSize: 15,
    lineHeight: 24,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  fab: {
    right: 0,
    bottom: 26,
    margin: 16,
  },
});
