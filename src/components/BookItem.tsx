import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

//Assets

import book1 from '../assets/book1.jpg';

//Components

const BookItem = () => {
  return (
    <View style={styles.layout}>
      <Text style={styles.text}>BookItem</Text>
      <Image style={styles.bookImage} source={book1} />
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
        debitis accusamus qui nihil sapiente saepe, nisi molestias eius incidunt
        maxime aut labore iste neque necessitatibus quasi quod laborum! Eos,
        quaerat.
      </Text>
      <View>
        <Text style={styles.text}>BookItem</Text>
        <Text style={styles.text}>BookItem</Text>
      </View>
    </View>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    width: '100%',
  },
  text: {
    color: 'black',
  },
  bookImage: {
    width: 50,
    height: 80,
  },
});
