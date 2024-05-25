import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

//Assets

import audiobook from '../assets/audiobooks.png';
import ebook from '../assets/book.png';
import book1 from '../assets/book1.jpg';

//Components

interface Iprops {
  image: any;
  name: string;
  author: string;
}

const BookItem: React.FC<Iprops> = ({image, name, author}) => {
  return (
    <View style={styles.layout}>
      <Image style={styles.bookImage} source={image} />
      <View>
        <Text style={styles.bookTitle}> {name} </Text>
        <Text style={styles.authorName}> {author} </Text>
        <Text numberOfLines={7} style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          debitis accusamus qui nihil sapiente saepe, nisi molestias eius
          incidunt maxime aut labore iste neque necessitatibus quasi quod
          laborum! Eos, quaerat.
        </Text>
      </View>
      <View style={styles.buttonSec}>
        <TouchableOpacity style={styles.button}>
          <Image source={ebook} style={styles.buttonImage} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Image source={audiobook} style={styles.buttonImage} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookItem;

const styles = StyleSheet.create({
  layout: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    justifyContent: 'space-between',
    gap: 4,
    width: '100%',
    paddingTop: 8,
    paddingHorizontal: 4,
    borderColor: 'grey',
    borderBottomWidth: 1,
  },
  text: {
    color: 'black',
  },
  bookImage: {
    width: 90,
    height: 150,
    borderRadius: 12,
  },
  buttonSec: {
    flexDirection: 'column',
    gap: 4,
    paddingHorizontal: 4,
  },
  button: {
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderColor: 'grey',
    borderWidth: 2,
    borderRadius: 20,
  },
  description: {
    height: 120,
    width: 160,
    color: 'black',
    textAlign: 'center',
    fontSize: 12,
  },
  bookTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  authorName: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonImage: {
    width: 32,
    height: 32,
  },
});
