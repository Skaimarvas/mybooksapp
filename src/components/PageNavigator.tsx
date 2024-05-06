import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';

//Hooks
import {useNavigation} from '@react-navigation/native';

//Assets
import more from '../assets/more.png';
import previous from '../assets/previous.png';

const PageNavigator = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navigator}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image source={previous} style={styles.navigatorButtonsImage} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Image source={more} style={styles.navigatorButtonsImage} />
      </TouchableOpacity>
    </View>
  );
};

export default PageNavigator;

const styles = StyleSheet.create({
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
