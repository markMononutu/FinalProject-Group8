import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Gap} from '../../../components';

const BottomNavigation = ({
  Home,
  Order,
  Profile,
  onPressHome,
  onPressOrder,
  onPressProfile,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPressHome}>{Home}</TouchableOpacity>
      <Gap width={110} />
      <TouchableOpacity onPress={onPressOrder}>{Order}</TouchableOpacity>
      <Gap width={110} />
      <TouchableOpacity onPress={onPressProfile}>{Profile}</TouchableOpacity>
    </View>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    flexDirection: 'row',
    paddingLeft: 37,
    paddingBottom: 15,
    paddingTop: 16,
    elevation: 15,
    flex: 1,
  },
});
