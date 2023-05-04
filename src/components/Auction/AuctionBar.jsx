import { Dimensions, ScrollView, StyleSheet } from "react-native";
import AuctionItem from "./AuctionItem";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function AuctionBar({ auctions }) {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.firstRow}>
      {auctions.map(auction => (
        <AuctionItem key={auction.id} auction={auction} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  firstRow: {
    backgroundColor: "orange",
    height: Math.floor(SCREEN_HEIGHT / 2),
  },
});
