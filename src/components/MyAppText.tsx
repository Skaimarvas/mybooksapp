import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Iprops {
  children: React.ReactNode;
}

const MyAppText: React.FC<Iprops> = ({children}) => {
  return (
    <View>
      <Text style={styles.text}>{children} </Text>
    </View>
  );
};

export default MyAppText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'InriaSerif',
    color: 'black',
    fontWeight: 'bold',
  },
});
