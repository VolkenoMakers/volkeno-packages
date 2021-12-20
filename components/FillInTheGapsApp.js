import React from "react";
import FillInTheGaps from "../react-native-fill-in-the-gaps";

const FillInTheGapsApp = () => {
  const content =
    "Un texte à ##pantalon## ou texte lacunaire est un ##exercice## qui consiste en un texte où des mots manquent, les ##pantalons##, et que l'élève doit remplir. C'est un type d'exercice ##courant## en apprentissage des ##langues.##";
  return (
    <FillInTheGaps
      title="C'est un type d'exercice courant en apprentissage des langues"
      containerStyle={{ paddingVertical: 20, paddingHorizontal: 20 }}
      titleStyle={{ fontSize: 18, textAlign: "center", fontWeight: "bold" }}
      textContentStyle={{ fontSize: 16 }}
      wordsContainerStyle={{ marginVertical: 30 }}
      wordContainerStyle={{ backgroundColor: "#000" }}
      wordStyle={{ color: "#FFF" }}
      buttonStyle={{ backgroundColor: "#000" }}
      buttonTitleStyle={{ color: "#FFF" }}
      buttonContainerStyle={{
        marginTop: "auto",
      }}
      responseRequired={false}
      content={content}
      onDone={(reults) => {
        console.log("reults", reults);
      }}
      additionalWords={["test 1", "test 2"]}
    />
  );
};

export default FillInTheGapsApp;
