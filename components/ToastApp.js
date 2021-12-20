import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

import { useToast, ToastProvider } from "../toast";

const ToastMessages = () => {
  const toast = useToast();
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button
        title="Show Sucess message"
        onPress={() => toast.success("this is an exemple of success message")}
      />
      <Button
        title="Show error message"
        onPress={() => toast.error("this is an exemple of error message")}
        containerStyle={{ marginVertical: 20 }}
      />
      <Button
        title="Show message with 10 seconds of duration"
        onPress={() =>
          toast.success(
            "this is an exemple of succes message with 10s of duration",
            10 * 1000
          )
        }
        containerStyle={{ marginVertical: 20 }}
      />
    </View>
  );
};

const ToastApp = () => {
  return (
    <ToastProvider>
      <ToastMessages />
    </ToastProvider>
  );
};

export default ToastApp;
