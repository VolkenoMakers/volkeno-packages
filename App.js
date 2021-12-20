import React from "react";
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import DragAndDropApp from "./components/DragAndDropApp";
import QuizSingleChoiceApp from "./components/QuizSingleChoiceApp";
import QuizMultipleChoiceApp from "./components/QuizMultipleChoiceApp";
import QuizTrueFalseApp from "./components/QuizTrueFalseApp";
import FillInTheGapsApp from "./components/FillInTheGapsApp";
import IntroSliderApp from "./components/IntroSliderApp";
import ImagePickerApp from "./components/ImagePickerApp";
import ProgressStapsApp from "./components/ProgressStepsApp";
import ToastApp from "./components/ToastApp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Text } from "react-native-elements";
const apps = [
  { title: "Drag and Drop", component: DragAndDropApp },
  { title: "Quiz Single Choice", component: QuizSingleChoiceApp },
  { title: "Drag and DropApp", component: QuizMultipleChoiceApp },
  { title: "Quiz Multiple Choice", component: QuizTrueFalseApp },
  { title: "Fill In The Gaps", component: FillInTheGapsApp },
  { title: "Intro Slider", component: IntroSliderApp },
  { title: "Image Picker", component: ImagePickerApp },
  { title: "Progress Staps", component: ProgressStapsApp },
  { title: "Toast Messages", component: ToastApp },
];
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name={"home"}
            component={Home}
            options={{ title: "Volkeno packages" }}
          />
          {apps.map((app) => (
            <Stack.Screen
              key={app.title}
              name={app.title}
              component={app.component}
              options={{ title: app.title }}
            />
          ))}
        </Stack.Navigator>
      </View>
    </NavigationContainer>
  );
}

function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={{ padding: 15 }}>
      <View style={{ flex: 1 }}>
        {apps.map((app, index) => (
          <TouchableOpacity
            key={app.title}
            onPress={() => navigation.navigate(app.title)}
          >
            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 5,
                marginBottom: 5,
                backgroundColor: "#FFF",
              }}
            >
              <Text style={{ fontWeight: "bold" }}>
                {index + 1}){"  "} {app.title}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});
