import React from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
//Hooks

//Assets
import time from '../../assets/Icon.png';
import list from '../../assets/List.png';
import book1 from '../../assets/book1black.jpg';
import star from '../../assets/star.png';
import PageNavigatorBookItem from '../../components/PageNavigatorBookItem';
//Components

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const BookDetails = () => {
  return (
    <ScrollView
      contentContainerStyle={styles.container}
      style={{
        backgroundColor: '#151515',
      }}>
      <PageNavigatorBookItem />
      <View style={styles.bookImageSection}>
        <View style={styles.forShadow}>
          <Image style={styles.bookImage} source={book1} />
        </View>
      </View>

      <View style={styles.bookSection}>
        <Text style={styles.bookName}> Psycho </Text>
        <Text style={styles.authorName}> Robert Bloch </Text>
        <View style={styles.bookDetail}>
          <View style={styles.detailItem}>
            <Image source={list} />
            <Text style={styles.detailText}>Chapters</Text>
          </View>
          <View style={styles.detailItem}>
            <Image source={time} />
            <Text style={styles.detailText}>Minutes</Text>
          </View>
          <View style={styles.detailItem}>
            <Image source={star} />
            <Text style={styles.detailText}>Insights</Text>
          </View>
        </View>
        <View style={styles.bookDescription}>
          <Text style={styles.descriptionHeader}>What's inside ?</Text>
          <Text style={styles.descriptionText}>
            Psycho, a novel by Robert Bloch published in 1959, is a gripping
            psychological thriller that delves into the dark and twisted mind of
            Norman Bates, a seemingly mild-mannered motel owner with a deeply
            disturbed psyche. The story unfolds with Marion Crane, a young woman
            who steals a large sum of money and ends up at the Bates Motel
            during a stormy night. There, she encounters Norman Bates and his
            domineering mother. As Marion's mysterious disappearance prompts an
            investigation, the true horror of the Bates family is revealed. The
            novel explores themes of identity, madness, and the duality of human
            nature, culminating in a shocking twist that has left a lasting
            impact on the genre. Bloch’s masterful storytelling and the complex
            characterization of Norman Bates make Psycho a timeless classic in
            horror literature.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default BookDetails;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    position: 'relative',
  },
  bookImageSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: screenWidth,
    position: 'absolute',
    top: 120,
    zIndex: 1,
  },
  bookSection: {
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopStartRadius: 40,
    borderTopEndRadius: 40,
    gap: 8,
    paddingTop: 200,
    paddingBottom: 20,
    marginTop: 160,
    width: screenWidth,
  },
  authorName: {
    fontSize: 24,
    fontWeight: 'light',
  },
  bookName: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'black',
  },
  bookDetail: {
    flexDirection: 'row',
    gap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  detailText: {
    color: 'black',
    fontSize: 20,
  },
  bookDescription: {
    marginTop: 20,
    marginHorizontal: 12,
    gap: 8,
  },
  descriptionHeader: {
    textAlign: 'center',
    color: 'black',
    fontSize: 28,
    fontWeight: 'bold',
  },
  descriptionText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
  forShadow: {
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 15,
    borderRadius: 20,
  },

  bookImage: {
    width: 180,
    height: 300,
    borderRadius: 20,
  },
});
