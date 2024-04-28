import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
//Hooks
import {useNavigation} from '@react-navigation/native';

//Assets
import book1 from '../../assets/book1.jpg';
import previous from '../../assets/previous.png';
import more from '../../assets/more.png';

/**Notes(Focus top on image)
 * I need to show top cover of the book
 * Solution: ?
 *
 */
const BookDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.navigator}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={previous} style={styles.navigatorButtonsImage} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={more} style={styles.navigatorButtonsImage} />
        </TouchableOpacity>
      </View>
      <View style={styles.bookHeader}>
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
  bookHeader: {
    width: '90%',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  navigator: {
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navigatorButtonsImage: {
    width: 26,
    height: 26,
  },
});
