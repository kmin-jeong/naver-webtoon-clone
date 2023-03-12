import React from 'react';
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { dayType } from 'Type/Type';
import { useNavigation } from '@react-navigation/native';
import { date } from 'Type/Type';
import { CardProps, WebtoonParameters } from 'Type/Type';
import Header from 'component/Header/Header';
import Banner from 'component/Banner/Banner';
import Card from 'component/Card/Card';
import { TabBar, TabView } from 'react-native-tab-view';
import { scale, WIDTHS } from 'component/Style/Dimension';
import MainList from 'component/List/MainList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//  요일 별 웹툰
const Stack = createNativeStackNavigator<WebtoonParameters>();

const Main = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="MainList" component={MainList} />
      <Stack.Screen name="Card" component={Card} />
    </Stack.Navigator>
  );
};
export default Main;
