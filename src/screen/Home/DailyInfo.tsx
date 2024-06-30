import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import right from '../../assets/right.png';
import student from '../../assets/student.png';

function DailyInfo() {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.studentImage} source={student} />
      </View>
      <View style={styles.dailyInfo}>
        <Text style={styles.h3Text}>Today's Top Free Book</Text>
        <View style={styles.direction}>
          <TouchableOpacity>
            <Text>Get it now!</Text>
          </TouchableOpacity>
          <Image style={styles.rightArrow} source={right} />
        </View>
      </View>
    </View>
  );
}
export default DailyInfo;

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
    width: 160,
  },
  studentImage: {
    width: 108,
    height: 108,
  },

  direction: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },

  h3Text: {
    fontSize: 24,
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
