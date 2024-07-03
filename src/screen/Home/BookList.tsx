import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {bookList} from '../../mock/BookListData';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ScreenParams} from '../../../App';
import PageNavigator from '../../components/PageNavigator';

const screenWidth = Dimensions.get('screen').width;

const BookList: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ScreenParams>>();
  return (
    <View>
      <PageNavigator title="Curated Pick" />
      <ScrollView
        contentContainerStyle={styles.container}
        style={styles.bookSection}>
        {bookList &&
          bookList.map((book: any, i: number) => (
            <TouchableOpacity
              key={i}
              onPress={() => navigation.navigate('BookDetails')}>
              <View style={styles.bookItem}>
                <View style={styles.bookShadow}>
                  <Image style={styles.bookImage} source={book.image} />
                </View>
                <Text style={styles.bookNameText}>{book.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
};

export default BookList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: screenWidth,
    justifyContent: 'center',
    gap: 12,
    paddingBottom: 80,
  },
  textColor: {
    color: 'black',
  },
  bookSection: {
    width: '100%',
  },
  bookItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  bookShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 2,
    borderRadius: 20,
  },

  bookNameText: {
    color: 'black',
    fontWeight: 'bold',
  },
  bookImage: {
    width: 190,
    height: 330,
    borderRadius: 20,
  },
});
