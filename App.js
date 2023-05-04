import { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView, Dimensions } from "react-native";
import EventSource from "react-native-sse";

const { width: SCREEN_WIDTH } = Dimensions.get("window");

export default function App() {
  const [auctions, setAuctions] = useState([]);

  useEffect(() => {
    const url = new URL("https://api.fleaauction.world/v2/sse/event");

    const eventSource = new EventSource(url);

    eventSource.addEventListener("open", event => {
      console.log("Open SSE connection.");
    });

    eventSource.addEventListener("sse.auction_viewed", event => {
      const auction = JSON.parse(event.data);
      auction.id = event.lastEventId;

      setAuctions(prevAuctions => [...prevAuctions, auction]);
    });

    eventSource.addEventListener("error", event => {
      if (event.type === "error") {
        console.error("Connection error:", event.message);
      } else if (event.type === "exception") {
        console.error("Error:", event.message, event.error);
      }
    });

    eventSource.addEventListener("close", event => {
      console.log("Close SSE connection.");
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.firstRow}>
        {auctions.map(auction => (
          <View id={auction.id} style={styles.firstRowItem}>
            <Text style={styles.auctionId}>작품ID: {auction.auctionId}</Text>
            <Text style={styles.viewCount}>조회수: {auction.viewCount}</Text>
          </View>
        ))}
      </ScrollView>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.secondRow}>
        {auctions.map(auction => (
          <View id={auction.id} style={styles.firstRowItem}>
            <Text style={styles.auctionId}>작품ID: {auction.auctionId}</Text>
            <Text style={styles.viewCount}>조회수: {auction.viewCount}</Text>
          </View>
        ))}
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
