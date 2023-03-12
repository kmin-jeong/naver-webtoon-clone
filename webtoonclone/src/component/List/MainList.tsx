import React from 'react';
import { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { dayType } from 'Type/Type';
import { useNavigation } from '@react-navigation/native';
import { date } from 'Type/Type';
import { CardProps } from 'Type/Type';
import Header from 'component/Header/Header';
import Banner from 'component/Banner/Banner';
import { TabBar, TabView } from 'react-native-tab-view';
import { scale, WIDTHS } from 'component/Style/Dimension';

//  요일 별 웹툰
const MainList = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState(date);
  const navigation = useNavigation<CardProps['navigation']>();
  return (
    <View style={{ flex: 1, position: 'relative' }}>
      <Header />
      <Banner />
      <TabView
        renderTabBar={(props) => (
          <TabBar
            {...props}
            style={styles.TabBar}
            indicatorStyle={styles.TabBarIndicator}
            labelStyle={styles.TabBarLabel}
            activeColor="green"
            pressColor="transparent"
          />
        )}
        navigationState={{ index, routes }}
        renderScene={(props) => (
          <Pressable
            style={styles.item}
            onPress={() => navigation.navigate('Card', { id: 1, title: '웹툰1', from: 'MainList' })}
          >
            <Text>{props.route.title}</Text>
          </Pressable>
        )}
        onIndexChange={setIndex}
        initialLayout={{ width: WIDTHS.WINDOW }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  TabBar: {
    zIndex: 2,
    backgroundColor: '#fff',
  },
  TabBarView: {
    top: 0,
    zIndex: 1,
    position: 'absolute',
    width: '100%',
  },
  TabBarIndicator: {
    backgroundColor: 'green',
  },
  TabBarLabel: {
    color: 'black',
    margin: 0,
    fontSize: 10,
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: WIDTHS.WINDOW - scale(12) * 2,
    height: scale(1000),
    backgroundColor: 'lightgray',
    marginHorizontal: scale(12),
  },
});
export default MainList;
