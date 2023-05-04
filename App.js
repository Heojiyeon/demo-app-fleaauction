import { useCallback, useEffect, useState } from "react";
import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  View,
} from "react-native";
import EventSource from "react-native-sse";
import AuctionBar from "./src/components/Auction/AuctionBar";
import NotExist from "./src/components/NotExist";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

export default function App() {
  const [auctions, setAuctions] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const sortByRandom = () => {
    setAuctions(prevAuctions =>
      prevAuctions.sort((a, b) => 0.5 - Math.random())
    );
    return auctions;
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    sortByRandom();
    setTimeout(() => {
      setRefreshing(false);
    }, 1000);
  }, []);

  useEffect(() => {
    const url = new URL("https://api.fleaauction.world/v2/sse/event");
    const eventSource = new EventSource(url);

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
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          tintColor={"#ff7f50"}
          progressViewOffset={Math.floor(SCREEN_HEIGHT / 2)}
        />
      }
      style={styles.container}
      showsHorizontalScrollIndicator={false}>
      {auctions.length === 0 ? (
        <NotExist />
      ) : (
        <>
          <AuctionBar auctions={auctions} />
          <View
            style={{
              borderBottomColor: "black",
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />
          <AuctionBar auctions={auctions} />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
});
