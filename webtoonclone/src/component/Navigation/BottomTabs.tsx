import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Main from 'page/Main';
import My from 'page/My';

const Tab = createBottomTabNavigator();

const BottomTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Main" component={Main} />
    <Tab.Screen name="My" component={My} />
  </Tab.Navigator>
);

export default BottomTabs;
