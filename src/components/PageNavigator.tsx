import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

//Hooks
import {useNavigation} from '@react-navigation/native';

//Assets
import more from '../assets/more.png';
import previous from '../assets/leftarrow.png';

interface Iprops {
  screenName: string;
}
const PageNavigator: React.FC<Iprops> = ({screenName}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.navigator}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <Image source={previous} style={styles.navigatorButtonsImage} />
      </TouchableOpacity>
      <Text style={{color: 'black'}}>{screenName}</Text>
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
    alignItems: 'center',
  },
  navigatorButtonsImage: {
    width: 26,
    height: 26,
  },
  back: {
    padding: 4,
    borderRadius: 50,
    borderColor: 'grey',
    borderWidth: 1,
  },
});
