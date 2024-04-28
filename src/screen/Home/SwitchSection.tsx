import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';

function SwitchSection() {
  const [switchButton, setSwitchButton] = useState(true);

  const switchHandle = () => {
    setSwitchButton(!switchButton);
  };
  return (
    <View style={styles.container}>
      <View style={styles.switchSection}>
        <TouchableOpacity
          style={[
            {
              backgroundColor: switchButton ? '#fff' : '#ececec',
              elevation: switchButton ? 5 : 0,
            },
            styles.switchButton,
          ]}
          onPress={() => switchHandle()}>
          <Text style={styles.text}>Ebooks</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            {
              backgroundColor: !switchButton ? '#fff' : '#ececec',
              elevation: !switchButton ? 5 : 0,
            },
            styles.switchButton,
          ]}
          onPress={() => switchHandle()}>
          <Text style={styles.text}>AudioBooks</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default SwitchSection;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },

  text: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 12,
  },
  switchSection: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
    borderRadius: 5,
    backgroundColor: '#ececec',
    paddingVertical: 3,
  },
  switchButton: {
    width: 158,
    padding: 10,
    borderRadius: 5,
  },
});
