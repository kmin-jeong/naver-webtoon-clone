import { Text, StyleSheet, View } from 'react-native';
import { HEIGHTS } from '../Style/Dimension';
const Banner = () => {
  return (
    <View style={styles.mainBanner}>
      <Text>Banner</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainBanner: {
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    height: HEIGHTS.MAIN_BANNER,
    backgroundColor: '#ffcdd2',
  },
});

export default Banner;
