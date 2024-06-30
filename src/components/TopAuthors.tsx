import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {authorList} from '../mock/BookListData';
import Author from './Author';

const TopAuthors = () => {
  return (
    <View style={styles.container}>
      <View style={styles.seeAll}>
        <Text style={styles.topicText}>Top Authors</Text>
        <Text>See All</Text>
      </View>
      <ScrollView contentContainerStyle={styles.bookListContainer} horizontal>
        {authorList &&
          authorList.map((author: any, i: number) => (
            <Author key={i} authorName={author.author} image={author.image} />
          ))}
      </ScrollView>
    </View>
  );
};

export default TopAuthors;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: 16,
    marginVertical: 12,
  },
  bookListContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'flex-start',
    gap: 10,
  },

  seeAll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  topicText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
