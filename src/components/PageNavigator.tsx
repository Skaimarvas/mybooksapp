import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

//Hooks
import {useNavigation} from '@react-navigation/native';

//Assets
import save from '../assets/bookmark1.png';
import close from '../assets/close1.png';

const PageNavigator = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.navigator}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Image source={close} style={styles.navigatorButtonsImage} />
      </TouchableOpacity>

      <TouchableOpacity>
        <Image source={save} style={styles.navigatorButtonsImage} />
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
    alignItems: 'center',
  },
  navigatorButtonsImage: {
    width: 26,
    height: 26,
  },
  back: {
    padding: 4,
    color: 'white',
  },
});
