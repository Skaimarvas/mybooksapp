import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import book1 from '../../assets/book1.jpg';

/**Notes(Focus top on image)
 * I need to show top cover of the book
 * Solution: ?
 *
 */
const BookDetails = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Navigator</Text>
      </View>
      <View>
        <Text style={styles.text}>Book Category</Text>
        <Text style={styles.text}>Book Title</Text>
        <Text style={styles.text}>Book Info</Text>
      </View>
      <View>
        <Text style={styles.text}>BookCover</Text>
        <View style={styles.bookCoverBackground}>
          <Image style={styles.bookCover} source={book1} />
        </View>
      </View>

      <View>
        <Text style={styles.text}>Rating</Text>
      </View>
      <View>
        <Text style={styles.text}>BookDetails</Text>
      </View>
    </View>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: 'lime',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: Dimensions.get('window').height,
  },
  text: {
    color: 'black',
  },
  bookCoverBackground: {
    backgroundColor: '#DADADA',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    height: 185,
    width: '100%',
    marginLeft: 20,
  },
  bookCover: {
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    height: 185,
    width: '100%',
    marginLeft: 40,
  },
});
