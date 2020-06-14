import React from 'react';
import {View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import Icon from '../../common/Icon';
import {colors} from '../../../config/theme';

export default class Item extends React.Component {
  _onPress = () => this.props.onDelete(this.props.id);
  _editStep = () => this.props.onEditStep(this.props.id);
  shouldComponentUpdate = (nextProps) => {
    return (
      nextProps.step !== this.props.step ||
      nextProps.isActive !== this.props.isActive ||
      nextProps.details !== this.props.details ||
      nextProps.photo !== this.props.photo
    );
  };

  render() {
    const {step, details, photo, onLongPress, isActive} = this.props;

    return (
      <TouchableOpacity onLongPress={onLongPress}>
        <View style={[styles.container, isActive ? styles.elevate : {}]}>
          <View style={styles.head}>
            <Text style={styles.step}>STEP {step + 1}</Text>
            <View style={styles.stepMenu}>
              <IconButton
                onPress={this._editStep}
                disabled={isActive}
                icon={() => <Icon color="gray" size={20} name="edit" />}
              />
              <IconButton
                onPress={this._onPress}
                disabled={isActive}
                icon={() => (
                  <Icon
                    color="gray"
                    size={20}
                    name={isActive ? 'swap' : 'closecircle'}
                  />
                )}
              />
            </View>
          </View>
          {Boolean(details) && <Text style={styles.details}>{details}</Text>}
          {Boolean(photo) && (
            <Image
              resizeMode="contain"
              defaultSource={require('../../../assets/noimage.jpg')}
              source={photo}
              style={styles.image}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    backgroundColor: colors.lightGray,
    borderRadius: 8,
  },
  elevate: {
    elevation: 4,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
    justifyContent: 'space-between',
  },
  number: {
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 16,
  },
  step: {
    fontWeight: 'bold',
  },
  stepMenu: {
    flexDirection: 'row',
  },
  details: {
    color: '#2d3436',
    padding: 8,
    fontSize: 15,
    lineHeight: 24,
  },
  image: {
    height: 200,
    width: '100%',
    marginBottom: 8,
  },
});
