import { StyleSheet, Text, View } from 'react-native';
import { CardProps } from 'Type/Type';

const Card = ({ route }: CardProps) => {
  const { id, title } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.item}>
        <Text>
          웹툰 카드 id: {id}, title: {title}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  item: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'yellow',
  },
});

export default Card;
