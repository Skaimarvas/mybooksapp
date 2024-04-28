import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import BookList from './BookList';
import TopHeader from '../../components/TopHeader';
import SwitchSection from './SwitchSection';

/**Notes(Error: ScrollView child layout ...)
 * Error: ScrollView child layout (["justifyContent"]) must be applied through the contentContainerStyle prop.
 * Solution: needed add below prop : 
 *   contentContainerStyle={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          gap: 10,
          alignContent: 'flex-start',
        }}
 */

const Homepage: React.FC = props => {
  return (
    <View>
      <TopHeader />
      <SwitchSection />
      <BookList />
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  textColor: {
    color: 'black',
  },
});
