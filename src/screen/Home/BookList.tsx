import React from 'react';
import {Image, ScrollView, StyleSheet, TouchableOpacity} from 'react-native';
import {bookList} from '../../mock/BookListData';
import {useNavigation} from '@react-navigation/native';

const BookList: React.FC = () => {
  const navigation = useNavigation();
  return (
    <ScrollView
      contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignContent: 'flex-start',
        gap: 10,
      }}
      style={styles.bookSection}>
      {bookList &&
        bookList.map((book: any, i: number) => (
          <TouchableOpacity
            key={i}
            onPress={() => navigation.navigate('BookDetails')}>
            <Image
              style={[styles.bookImage, {height: i == 1 ? 280 : 280}]}
              source={book.image}
            />
          </TouchableOpacity>
        ))}
    </ScrollView>
  );
};

export default BookList;

const styles = StyleSheet.create({
  textColor: {
    color: 'black',
  },
  bookSection: {
    width: '100%',
  },
  bookImage: {
    width: 160,
    borderRadius: 20,
  },
});
