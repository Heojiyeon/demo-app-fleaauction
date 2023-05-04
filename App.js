import { useCallback, useEffect, useState } from "react";
import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import EventSource from "react-native-sse";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function App() {
  const [auctions, setAuctions] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  console.log("auctions", auctions);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setAuctions(prevAuctions =>
      prevAuctions.sort((a, b) => 0.5 - Math.random())
    );
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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
      {auctions.length === 0 && (
        <View style={styles.notExistContainer}>
          <Text style={styles.notExist}>아직 작품이 존재하지 않아요!</Text>
        </View>
      )}
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressViewOffset={Math.floor(SCREEN_HEIGHT / 2)}
          />
        }
        showsHorizontalScrollIndicator={false}>
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  notExistContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  notExist: {
    fontSize: 30,
  },
  firstRow: {
    backgroundColor: "orange",
    height: Math.floor(SCREEN_HEIGHT / 2),
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
    height: Math.floor(SCREEN_HEIGHT / 2),
  },
  secondRowItem: {
    width: Math.floor(SCREEN_WIDTH / 2),
    justifyContent: "center",
    alignItems: "center",
  },
});
