import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

//Hooks
import {useNavigation} from '@react-navigation/native';

//Assets
import left from '../assets/chevronleft.png';

interface Iprops {
  title: string;
}

const PageNavigator: React.FC<Iprops> = ({title}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.navigator}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Image source={left} style={styles.navigatorButtonsImage} />
      </TouchableOpacity>
      <Text style={styles.titleText}> {title} </Text>
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  navigatorButtonsImage: {
    width: 26,
    height: 26,
  },
  titleText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  back: {
    padding: 4,
    color: 'white',
  },
});
