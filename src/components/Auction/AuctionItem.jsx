import { Dimensions, StyleSheet, Text, View } from "react-native";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function AuctionItem({ auction }) {
  return (
    <View style={styles.firstRowItem}>
      <Text style={styles.auctionId}>작품ID: {auction.auctionId}</Text>
      <Text style={styles.viewCount}>조회수: {auction.viewCount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
