import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProgressBar} from 'react-native-paper';
import {screenWidth} from '../../App';
import bookSample from '../assets/book1black.jpg';

const OngoingRead = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.bookImageView}>
          <Image style={styles.bookImage} source={bookSample} />
        </View>

        <Text>Book Image</Text>
      </View>
      <View style={styles.detailSection}>
        <View>
          <Text>Book Name</Text>
        </View>
        <View style={styles.progressSection}>
          <ProgressBar color="black" progress={0.5} style={styles.progress} />
          <Text>50%</Text>
        </View>
      </View>
    </View>
  );
};

export default OngoingRead;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: screenWidth,
    paddingHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progress: {
    height: 12,
    borderRadius: 8,
  },
  progressView: {
    backgroundColor: 'grey',
  },
  bookImageView: {
    shadowColor: '#000',
    shadowOpacity: 1,
    shadowRadius: 20,
    elevation: 4,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  bookImage: {
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderColor: 'black',
    borderWidth: 1,
    width: 140,
    height: 220,
  },
  detailSection: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderColor: 'lime',
    borderWidth: 1,
    height: 100,
  },
  progressSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
