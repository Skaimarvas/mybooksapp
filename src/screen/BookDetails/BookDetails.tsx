import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
//Hooks
import {useNavigation} from '@react-navigation/native';

//Assets
import book1 from '../../assets/book1.jpg';
import star from '../../assets/star.png';
//Components
import PageNavigator from '../../components/PageNavigator';

/**Notes(Focus top on image)
 * I need to show top cover of the book
 * Solution: can't do all images
 *
 */
const BookDetails = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.container}>
      <PageNavigator />
      <View style={styles.headerContainer}>
        <View style={styles.bookHeader}>
          <Text style={styles.category}>HISTORY</Text>
          <Text style={styles.title}>
            Always forgive your enemies, nothing annoys.
          </Text>
          <View style={styles.info}>
            <Text style={styles.bookInfo}>Published from istudio</Text>
            <Text style={styles.bookInfo}>26 Mar, 2024</Text>
          </View>
        </View>
      </View>
      <View style={styles.bookCoverBackground}>
        <Image style={styles.bookCover} source={book1} />
      </View>
      <View style={styles.ratingContainer}>
        <View style={styles.ratings}>
          <View style={styles.ratingSection}>
            <Text style={styles.ratingText}>4.5</Text>

            <View style={styles.starsContainer}>
              <Image style={styles.stars} source={star} />
              <Image style={styles.stars} source={star} />
              <Image style={styles.stars} source={star} />
              <Image style={styles.stars} source={star} />
              <Image style={styles.stars} source={star} />
            </View>
          </View>
          <Text style={styles.bookInfo}>892 Ratings on Google Play</Text>
        </View>
      </View>
      <View style={styles.detailContainer}>
        <Text style={styles.detailText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          dolores id, voluptate quibusdam iure odit voluptatum alias accusantium
          eveniet accusamus rem maxime provident sunt ducimus obcaecati est
          enim, adipisci vel? Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Perspiciatis dolores id, voluptate quibusdam iure odit
          voluptatum alias accusantium eveniet accusamus rem maxime provident
          sunt ducimus obcaecati est enim, adipisci vel? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Perspiciatis dolores id, voluptate
          quibusdam iure odit voluptatum alias accusantium eveniet accusamus rem
          maxime provident sunt ducimus obcaecati est enim, adipisci vel? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          dolores id, voluptate quibusdam iure odit voluptatum alias accusantium
          eveniet accusamus rem maxime provident sunt ducimus obcaecati est
          enim, adipisci vel?
        </Text>
      </View>
    </ScrollView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  text: {
    color: 'black',
  },
  category: {
    color: 'orange',
    fontSize: 15,
    fontWeight: 'bold',
  },
  title: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
  bookInfo: {
    color: 'grey',
    fontSize: 12,
    fontWeight: 'light',
  },
  bookCoverBackground: {
    backgroundColor: '#DADADA',
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    height: 185,
    width: '100%',
    marginLeft: 20,
    marginVertical: 15,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  bookCover: {
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    height: 185,
    width: '100%',
    marginLeft: 40,
  },
  headerContainer: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 15,
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
  detailContainer: {
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 15,
  },
  detailText: {
    width: '90%',
    color: 'black',
  },
  ratingContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  ratings: {
    width: '90%',
  },
  ratingText: {
    color: 'black',
    fontSize: 30,
  },
  ratingSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
  stars: {
    width: 15,
    height: 15,
  },
});
