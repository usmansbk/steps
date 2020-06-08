import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text, Searchbar} from 'react-native-paper';

export default () => {
  const name = 'michel';
  const gender = 'male';
  let source;
  if (gender === 'male') {
    source = require('../images/male.png');
  } else {
    source = require('../images/female.png');
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.text}>
            <Text style={styles.hail}>Hey </Text>
            {name},
          </Text>
          <Text style={styles.text}>Good morning</Text>
        </View>
        <Image source={source} style={styles.avatar} />
      </View>
      <View style={styles.search}>
        <Searchbar placeholder="How to..." />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingVertical: 4,
  },
  avatar: {
    width: 64,
    height: 64,
  },
  search: {
    marginVertical: 20,
  },
});
