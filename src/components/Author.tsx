import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

interface Iprops {
  image: any;
  authorName: string;
}

const Author: React.FC<Iprops> = ({image, authorName}) => {
  return (
    <View style={styles.container}>
      <View style={styles.authorSection}>
        <Image style={styles.image} source={image} />
      </View>
      <Text style={styles.text}>{authorName}</Text>
    </View>
  );
};

export default Author;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  image: {
    width: 108,
    height: 108,
    borderRadius: 100,
    borderColor: 'black',
    borderWidth: 1,
    resizeMode: 'contain',
  },
  authorSection: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 1,
    shadowRadius: 100,
    elevation: 4,
    borderRadius: 100,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
  },
});
