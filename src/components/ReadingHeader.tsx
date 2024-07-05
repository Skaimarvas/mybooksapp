import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

//Assets
import SearchButton from '../assets/search.png';
import menu from '../assets/menu.png';

const ReadingHeader = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.menuButton} source={menu} />
      <Image style={styles.menuButton} source={SearchButton} />
    </View>
  );
};

export default ReadingHeader;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textColor: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  menuButton: {
    width: 26,
    height: 26,
  },
});
