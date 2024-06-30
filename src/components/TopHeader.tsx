import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

//Assets
import SearchButton from '../assets/search.png';

/**Notes: (rnf)
 *  Short way to create react-native component
 *
 */

export default function TopHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.textColor}> Hello User!</Text>
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
