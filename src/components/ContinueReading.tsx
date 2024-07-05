import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import readingPerson from '../assets/readingPerson.png';

function ContinueReading() {
  return (
    <View style={styles.container}>
      <View style={styles.dailyInfo}>
        <Text style={styles.h3Text}>Continue Reading</Text>
      </View>
      <View>
        <Image style={styles.studentImage} source={readingPerson} />
      </View>
    </View>
  );
}
export default ContinueReading;

const styles = StyleSheet.create({
  container: {
    height: 120,
    backgroundColor: '#E7E7E7',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 10,
  },
  dailyInfo: {
    flexDirection: 'column',
    gap: 16,
    width: 120,
  },
  studentImage: {
    width: 180,
    height: 120,
  },

  direction: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },

  h3Text: {
    fontSize: 28,
    color: 'black',
    fontWeight: 'bold',
  },
  rightArrow: {
    width: 30,
    height: 30,
  },

  text: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
});
