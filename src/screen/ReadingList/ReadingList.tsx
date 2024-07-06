import React from 'react';
import {StyleSheet, View} from 'react-native';
import ContinueReading from '../../components/ContinueReading';
import OngoingRead from '../../components/OngoingRead';
import ReadingHeader from '../../components/ReadingHeader';
import SavedBooks from '../../components/SavedBooks';

const ReadingList = () => {
  return (
    <View style={styles.container}>
      <ReadingHeader />
      <ContinueReading />
      <OngoingRead />
      <SavedBooks />
    </View>
  );
};

export default ReadingList;

const styles = StyleSheet.create({
  container: {
    gap: 24,
  },
});
