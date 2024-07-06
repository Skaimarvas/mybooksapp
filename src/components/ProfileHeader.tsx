import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import profile from '../assets/profile.png';

const ProfileReader: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dailyInfo}>
        <Text style={styles.h3Text}>My Account</Text>
      </View>
      <View>
        <Image style={styles.profileImage} source={profile} />
      </View>
    </View>
  );
};
export default ProfileReader;

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    height: 120,
    backgroundColor: '#E7E7E7',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  dailyInfo: {
    flexDirection: 'column',
    gap: 16,
    width: 120,
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
  profileImage: {
    height: 100,
    width: 100,
  },
});
