import React from "react";
import { Switch, View, Text } from "react-native";

import QuizMultipleChoice from "../react-native-quiz-multiple-choice";

const QuizMultipleChoiceApp = () => {
  const data = [
    {
      question:
        "Pendant la préhistoire, quelle période a suivi l’age de la pierre taillée ?",
      responses: [
        "l’âge de la pierre polie",
        // "l’âge du fer",
        // "l’âge du bronze",
        // "l’âge de la pierre ponce",
      ],
      answers: ["l’âge de la pierre polie", "l’âge de la pierre ponce"],
    },
    // {
    //   question: "Une personne qui parle couramment le français est :",
    //   responses: ["Francilienne", "Francophone", "Tchatcheuse", "Francophile"],
    //   answers: ["Francophone", "Francilienne"],
    // },
    // {
    //   question: "Quel petit signe place-t-on parfois sous la lettre C ?",
    //   responses: [
    //     "Une virgule",
    //     "Une cédille",
    //     "Une apostrophe",
    //     "Un petit cygne",
    //   ],
    //   answers: ["Une cédille", "Une apostrophe", "Une virgule"],
    // },
  ];
  return (
    <QuizMultipleChoice
      containerStyle={{ backgroundColor: "#61dafb", paddingTop: 30 }}
      questionTitleStyle={{ fontSize: 22, color: "#FFF" }}
      responseStyle={{
        borderRadius: 15,
      }}
      responseTextStyle={{ fontSize: 12, fontWeight: "normal" }}
      selectedResponseStyle={{
        borderRadius: 15,
        backgroundColor: "#fa5541",
      }}
      selectedResponseTextStyle={{
        fontSize: 14,
        fontWeight: "normal",
      }}
      responseRequired={true}
      nextButtonText={"Next"}
      nextButtonStyle={{ backgroundColor: "#06d755" }}
      nextButtonTextStyle={{ color: "#FFF" }}
      prevButtonText={"Prev"}
      prevButtonStyle={{ backgroundColor: "#fa5541" }}
      prevButtonTextStyle={{ color: "#FFF" }}
      endButtonText={"Done"}
      endButtonStyle={{ backgroundColor: "#000" }}
      endButtonTextStyle={{ color: "#FFF" }}
      buttonsContainerStyle={{ marginTop: "auto" }}
      onEnd={(results) => {
        console.log(results);
      }}
      data={data}
    />
  );
};

export default QuizMultipleChoiceApp;

// renderResponse={(item, selected, onPress) => {
//   return (
//     <View
//       style={{
//         flexDirection: "row",
//         alignItems: "center",
//         justifyContent: "space-between",
//       }}
//     >
//       <Text>{item}</Text>
//       <Switch value={selected} onValueChange={onPress} />
//     </View>
//   );
// }}
