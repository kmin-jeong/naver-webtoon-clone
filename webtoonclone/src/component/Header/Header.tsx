import React from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { dayType } from 'Type/Type';
import { date } from 'Type/Type';
import { HEIGHTS, scale } from '../Style/Dimension';

const Header = () => (
  <View>
    <Text>Header</Text>
  </View>
);

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: HEIGHTS.HEADER,
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: scale(16),
    backgroundColor: '#fff',
  },
  headerIcon: {
    zIndex: 4,
    position: 'absolute',
    height: HEIGHTS.HEADER,
    justifyContent: 'flex-end',
    padding: scale(12),
  },
  headerLeft: {
    left: 0,
  },
  headerRight: {
    right: 0,
  },
});
export default Header;
