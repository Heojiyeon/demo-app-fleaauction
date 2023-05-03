import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.firstRow}>
        <View style={styles.firstRowItem}>
          <Text style={styles.auctionId}>auctionId</Text>
          <Text style={styles.viewCount}>viewCount</Text>
        </View>
        <View style={styles.firstRowItem}>
          <Text style={styles.auctionId}>auctionId</Text>
          <Text style={styles.viewCount}>viewCount</Text>
        </View>
        <View style={styles.firstRowItem}>
          <Text style={styles.auctionId}>auctionId</Text>
          <Text style={styles.viewCount}>viewCount</Text>
        </View>
        <View style={styles.firstRowItem}>
          <Text style={styles.auctionId}>auctionId</Text>
          <Text style={styles.viewCount}>viewCount</Text>
        </View>
        <View style={styles.firstRowItem}>
          <Text style={styles.auctionId}>auctionId</Text>
          <Text style={styles.viewCount}>viewCount</Text>
        </View>
        <View style={styles.firstRowItem}>
          <Text style={styles.auctionId}>auctionId</Text>
          <Text style={styles.viewCount}>viewCount</Text>
        </View>
        <View style={styles.firstRowItem}>
          <Text style={styles.auctionId}>auctionId</Text>
          <Text style={styles.viewCount}>viewCount</Text>
        </View>
        <View style={styles.firstRowItem}>
          <Text style={styles.auctionId}>auctionId</Text>
          <Text style={styles.viewCount}>viewCount</Text>
        </View>
        <View style={styles.firstRowItem}>
          <Text style={styles.auctionId}>auctionId</Text>
          <Text style={styles.viewCount}>viewCount</Text>
        </View>
        <View style={styles.firstRowItem}>
          <Text style={styles.auctionId}>auctionId</Text>
          <Text style={styles.viewCount}>viewCount</Text>
        </View>
      </ScrollView>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.secondRow}>
        <View style={styles.secondRowItem}>
          <Text style={styles.auctionId}>auctionId</Text>
          <Text style={styles.viewCount}>viewCount</Text>
        </View>
        <View style={styles.secondRowItem}>
          <Text style={styles.auctionId}>auctionId</Text>
          <Text style={styles.viewCount}>viewCount</Text>
        </View>
        <View style={styles.secondRowItem}>
          <Text style={styles.auctionId}>auctionId</Text>
          <Text style={styles.viewCount}>viewCount</Text>
        </View>
        <View style={styles.secondRowItem}>
          <Text style={styles.auctionId}>auctionId</Text>
          <Text style={styles.viewCount}>viewCount</Text>
        </View>
        <View style={styles.secondRowItem}>
          <Text style={styles.auctionId}>auctionId</Text>
          <Text style={styles.viewCount}>viewCount</Text>
        </View>
        <View style={styles.secondRowItem}>
          <Text style={styles.auctionId}>auctionId</Text>
          <Text style={styles.viewCount}>viewCount</Text>
        </View>
        <View style={styles.secondRowItem}>
          <Text style={styles.auctionId}>auctionId</Text>
          <Text style={styles.viewCount}>viewCount</Text>
        </View>
        <View style={styles.secondRowItem}>
          <Text style={styles.auctionId}>auctionId</Text>
          <Text style={styles.viewCount}>viewCount</Text>
        </View>
        <View style={styles.secondRowItem}>
          <Text style={styles.auctionId}>auctionId</Text>
          <Text style={styles.viewCount}>viewCount</Text>
        </View>
        <View style={styles.secondRowItem}>
          <Text style={styles.auctionId}>auctionId</Text>
          <Text style={styles.viewCount}>viewCount</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  firstRow: {
    backgroundColor: "orange",
  },
  firstRowItem: {
    width: Math.floor(SCREEN_WIDTH / 2),
    justifyContent: "center",
    alignItems: "center",
  },
  auctionId: {
    fontSize: 20,
    fontWeight: "bold",
  },
  viewCount: {
    fontSize: 14,
    fontWeight: "bold",
  },
  secondRow: {
    backgroundColor: "teal",
  },
  secondRowItem: {
    width: Math.floor(SCREEN_WIDTH / 2),
    justifyContent: "center",
    alignItems: "center",
  },
});
