import {View, Text, StyleSheet, Button, Image} from 'react-native';
import React from 'react';

//Assets
import MenuButton from '../assets/menu.png';
import SearchButton from '../assets/search.png';

/**Notes: (rnf)
 *  Short way to create react-native component
 *
 */

export default function TopHeader() {
  return (
    <View style={styles.container}>
      <Image style={styles.menuButton} source={MenuButton} />

      <Text style={styles.textColor}> All Books</Text>
      <Image style={styles.menuButton} source={SearchButton} />
    </View>
  );
}

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
