import { Dimensions, StyleSheet, Text, View } from "react-native";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function NotExist() {
  return (
    <View style={styles.notExistContainer}>
      <Text style={styles.notExist}>아직 작품이 존재하지 않아요!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  notExistContainer: {
    flex: 1,
    height: Math.floor(SCREEN_HEIGHT / 2),
    justifyContent: "center",
    alignItems: "center",
  },
  notExist: {
    fontSize: 30,
  },
});
