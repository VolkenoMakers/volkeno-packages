import React from "react";
import { View, Button, Text } from "react-native";
import ProgressSteps from "../progress-steps";

const ProgressStapsApp = () => {
  return (
    <ProgressSteps
      onFinish={() => console.log("finished")}
      indicatorColor="#FFF"
      indicatorHeight={5}
      containerStyle={{ flex: 1, backgroundColor: "#3498db", paddingTop: 24 }}
      indicatorContainerStyle={{
        backgroundColor: "#3498db",
        paddingVertical: 10,
      }}
      renderEndButton={(onPress) => (
        <Button color={"#FFF"} title={"Done"} onPress={onPress} />
      )}
      renderNextButton={(onPress) => (
        <Button color={"#FFF"} title={"Next"} onPress={onPress} />
      )}
    >
      <Step title="First step" />
      <Step title="Step2" />
      <Step title="Step3" />
      <Step title="Last step" />
    </ProgressSteps>
  );
};

export default ProgressStapsApp;

const Step = ({ title }) => {
  return (
    <View
      style={{
        backgroundColor: "#EEE",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
      }}
    >
      <Text style={{ fontSize: 40 }}>{title}</Text>
    </View>
  );
};
