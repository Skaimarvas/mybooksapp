import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PageNavigator from '../../components/PageNavigator';
import BookItem from '../../components/BookItem';
import {bookList} from '../../mock/BookListData';

const TopBooks = () => {
  return (
    <ScrollView>
      <PageNavigator screenName={`Trending Books`} />
      <View style={styles.bookList}>
        {bookList &&
          bookList.map((book, i) => (
            <BookItem
              key={i}
              name={book.name}
              author={book.author}
              image={book.image}
            />
          ))}
      </View>
    </ScrollView>
  );
};

export default TopBooks;

const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  bookList: {
    paddingTop: 20,
  },
  text: {
    color: 'black',
  },
});
