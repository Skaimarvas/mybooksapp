import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import CuratedPick from '../../components/CuratedPick';
import TopAuthors from '../../components/TopAuthors';
import TopHeader from '../../components/TopHeader';
import WeeklyTops from '../../components/WeeklyTops';
import DailyInfo from './DailyInfo';

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
    <ScrollView>
      <TopHeader />
      <DailyInfo />
      <CuratedPick />
      <TopAuthors />
      <WeeklyTops />
    </ScrollView>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  textColor: {
    color: 'black',
  },
});
