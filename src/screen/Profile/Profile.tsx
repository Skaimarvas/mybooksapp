import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import ProfileHeader from '../../components/ProfileHeader';
import right from '../../assets/chevronright.png';
import {Divider} from 'react-native-paper';
import {Button} from '@ui-kitten/components';

const Profile = () => {
  return (
    <View style={styles.container}>
      <ProfileHeader />
      <View style={styles.profile}>
        <View style={styles.option}>
          <Image style={styles.vector} source={right} />
          <Text style={styles.text}>Account Info</Text>
        </View>
        <Divider />
        <View style={styles.option}>
          <Image style={styles.vector} source={right} />
          <Text style={styles.text}>Settings</Text>
        </View>
      </View>
      <Button>
        <Text>Log Out</Text>
      </Button>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginHorizontal: 16,
    gap: 16,
  },
  text: {
    fontSize: 24,
    color: 'black',
  },
  option: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
  },
  profile: {
    flexDirection: 'column',
    gap: 8,
    borderWidth: 1,
    paddingVertical: 16,
    borderRadius: 20,
  },
  vector: {},
});
