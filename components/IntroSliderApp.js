import React from "react";
import { View } from "react-native";
// import IntroSlider from "../intro-slider";
import IntroSlider from "@volkenomakers/intro-slider";
import { Icon, Text } from "react-native-elements";
import { SafeAreaView } from "react-native";
const data = [
  {
    title: "Le lorem ipsum est, en imprimerie,",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant ",
    image: "https://via.placeholder.com/150",
  },
  {
    title: "Le lorem ipsum est, en imprimerie,",
    description:
      "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant ",
    image: "https://via.placeholder.com/150",
  },
  {
    title: () => (
      <Text style={{ fontSize: 18, fontWeight: "bold", marginVertical: 20 }}>
        Title with custom component
      </Text>
    ),
    description: () => (
      <Text>
        Le lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant Le lorem ipsum est, en imprimerie, une suite de mots
        sans signification utilisée à titre provisoire pour calibrer une mise en
        page, le texte définitif venant Le lorem ipsum est, en imprimerie, une
        suite de mots sans signification utilisée à titre provisoire pour
        calibrer une mise en page, le texte définitif venant Le lorem ipsum est,
        en imprimerie, une suite de mots sans signification utilisée à titre
        provisoire pour calibrer une mise en page, le texte définitif venant Le
        lorem ipsum est, en imprimerie, une suite de mots sans signification
        utilisée à titre provisoire pour calibrer une mise en page, le texte
        définitif venant Le lorem ipsum est, en imprimerie, une suite de mots
        sans signification utilisée à titre provisoire pour calibrer une mise en
        page, le texte définitif venant Le lorem ipsum est, en imprimerie, une
        suite de mots sans signification utilisée à titre provisoire pour
        calibrer une mise en page, le texte définitif venant Le lorem ipsum est,
        en imprimerie, une suite de mots sans signification utilisée à titre
        provisoire pour calibrer une mise en page, le texte définitif venant
      </Text>
    ),
    image: "https://via.placeholder.com/150",
  },
];
const IntroSliderApp = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#000" }}>
      <IntroSlider
        data={data}
        onEnd={() => console.log("slider end")}
        titleStyle={{ fontSize: 40, color: "#0969da" }}
        indicatorColor="#0969da"
        descriptionStyle={{ fontSize: 16 }}
        containerStyle={{ backgroundColor: "#EEE", flex: 1 }}
        imageProps={{ resizeMode: "contain" }}
        renderEndButton={() => (
          <View
            style={{
              padding: 15,
              borderRadius: 35,
              overflow: "hidden",
              backgroundColor: "#000",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              name="arrow-right"
              type="material-community"
              color={"#FFF"}
              size={20}
            />
          </View>
        )}
        renderNextButton={(activeIndex) => (
          <View
            style={{
              padding: 15,
              borderRadius: 35,
              overflow: "hidden",
              backgroundColor: "#0969da",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icon
              name="arrow-right"
              type="material-community"
              color={"#FFF"}
              size={20}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default IntroSliderApp;
