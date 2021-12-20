import React from "react";
import { StyleSheet, Text, View } from "react-native";

import DragAndDrop from "../react-native-drag-drop";
export default function App() {
  const [items, setItems] = React.useState([
    { id: 1, text: "Test item 1" },
    { id: 2, text: "Test item 2" },
    { id: 3, text: "Test item 3" },
    { id: 4, text: "Test item 4" },
    { id: 6, text: "Test item 6" },
    { id: 7, text: "Test item 7" },
    { id: 8, text: "Test item 8" },
    { id: 9, text: "Test item 9" },
  ]);
  const [zones, setZones] = React.useState([
    {
      id: 1,
      text: "Test zone 1",
      items: [{ id: 5, text: "Test existing item 5" }],
    },
    {
      id: 2,
      text: "Test zone 2",
    },
    {
      id: 3,
      text: "Test zone 3",
    },
    {
      id: 4,
      text: "Test zone 4",
    },
    {
      id: 6,
      text: "Test zone 6",
    },
    {
      id: 7,
      text: "Test zone 7",
    },
    {
      id: 8,
      text: "Test zone 8",
    },
    {
      id: 9,
      text: "Test zone 9",
    },
  ]);

  return (
    <View style={{ flex: 1 }}>
      {/* <View style={{ height: 100, backgroundColor: "#000" }} /> */}
      <DragAndDrop
        style={styles.container}
        contentContainerStyle={styles.contentContainerStyle}
        itemKeyExtractor={(item) => item.id}
        zoneKeyExtractor={(zone) => zone.id}
        // draggedElementStyle={{ backgroundColor: "#F00" }}
        headerComponent={
          <View>
            <Text>this is a header</Text>
          </View>
        }
        footerComponent={
          <View>
            <Text>this is a footer</Text>
          </View>
        }
        zones={zones}
        items={items}
        itemsContainerStyle={styles.itemsContainerStyle}
        zonesContainerStyle={styles.zonesContainerStyle}
        maxItemsPerZone={2}
        onMaj={(zones, items) => {
          // setItems(items);
          // setZones(zones);
        }}
        itemsInZoneStyle={styles.itemsInZoneStyle}
        renderItem={(item) => {
          return (
            <View style={styles.dragItemStyle}>
              <Text style={styles.dragItemTextStyle}>{item.text}</Text>
            </View>
          );
        }}
        renderZone={(zone, children, hover) => {
          return (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
              }}
            >
              <Text style={{ marginHorizontal: 5, fontSize: 18 }}>
                {zone.text}
              </Text>
              <View
                style={{
                  ...styles.dragZoneStyle,
                  backgroundColor: hover ? "#E2E2E2" : "#FFF",
                  flex: 1,
                }}
              >
                {children}
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemsInZoneStyle: {
    width: "100%",
  },
  contentContainerStyle: {
    padding: 20,
    paddingTop: 40,
  },
  itemsContainerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
  },
  zonesContainerStyle: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  dragItemStyle: {
    borderColor: "#F39200",
    borderWidth: 1,
    width: "47%",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 5,
    backgroundColor: "#F5F5F5",
    padding: 10,
  },
  dragItemTextStyle: {
    color: "#011F3B",
    fontWeight: "700",
    textAlign: "center",
  },
  dragZoneStyle: {
    borderColor: "#F39200",
    borderWidth: 1,
    width: "100%",
    padding: 15,
    minHeight: 60,
    marginVertical: 15,
  },
  dragZoneTextStyle: {
    position: "absolute",
    opacity: 0.2,
    zIndex: 0,
    alignSelf: "center",
  },
});
