import React from 'react';
import {StyleSheet, View} from 'react-native';
import ContinueReading from '../../components/ContinueReading';
import ReadingHeader from '../../components/ReadingHeader';
import SavedBooks from '../../components/SavedBooks';
import OngoingRead from '../../components/OngoingRead';

const ReadingList = () => {
  return (
    <View>
      <ReadingHeader />
      <ContinueReading />
      <OngoingRead />
      <SavedBooks />
    </View>
  );
};

export default ReadingList;

const styles = StyleSheet.create({});
