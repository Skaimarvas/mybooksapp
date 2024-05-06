import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import PageNavigator from '../../components/PageNavigator';
import BookItem from '../../components/BookItem';

const TopBooks = () => {
  return (
    <View>
      <PageNavigator />
      <Text style={styles.text}>TopBooks</Text>
      <BookItem />
    </View>
  );
};

export default TopBooks;

const styles = StyleSheet.create({
  text: {
    color: 'black',
  },
});
