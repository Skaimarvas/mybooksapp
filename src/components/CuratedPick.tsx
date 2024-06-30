import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScreenParams} from '../../App';
import {bookList} from '../mock/BookListData';

const CuratedPick = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenParams>>();
  return (
    <View style={styles.container}>
      <View style={styles.seeAll}>
        <Text style={styles.topicText}>Curated Pick</Text>
        <Text>See All</Text>
      </View>
      <ScrollView contentContainerStyle={styles.bookListContainer} horizontal>
        {bookList &&
          bookList.map((book: any, i: number) => (
            <TouchableOpacity
              key={i}
              onPress={() => navigation.navigate('BookDetails')}>
              <Image style={styles.bookImage} source={book.image} />
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default CuratedPick;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: 16,
    marginVertical: 8,
  },
  topicText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  seeAll: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
  },
  bookListContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'flex-start',
    gap: 16,
  },
  bookImage: {
    width: 140,
    height: 240,
    elevation: 8,
    borderRadius: 20,
  },
});
