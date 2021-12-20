import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import {
  useImagePickerModal,
  launchCameraAsync,
  launchImageLibraryAsync,
} from "../image-picker/index";

const ImagePickerApp = () => {
  const [showModal, renderModal] = useImagePickerModal(
    (result) => {
      if (result) {
        console.log(result.uri);
      }
    },
    {
      joinImageText: "Join an image",
      useCameraText: "Open camera",
    }
  );
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      {renderModal()}
      <Button title="Show Picker modal" onPress={() => showModal(true)} />
      <Button
        title="Open camera"
        onPress={() => launchCameraAsync()}
        containerStyle={{ marginVertical: 20 }}
      />
      <Button title="Pick image" onPress={() => launchImageLibraryAsync()} />
    </View>
  );
};

export default ImagePickerApp;
