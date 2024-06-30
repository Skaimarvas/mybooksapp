import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PageNavigator from '../../components/PageNavigator';

import {bookList} from '../../mock/BookListData';

const TopBooks = () => {
  return (
    <ScrollView>
      <PageNavigator screenName={`Trending Books`} />
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
