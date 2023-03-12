import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from 'page/Main';
import My from 'page/My';

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Main" component={Main} options={{ headerShown: false }} />
    <Tab.Screen name="My" component={My} options={{ headerShown: false }} />
  </Tab.Navigator>
);

export default BottomTabs;
