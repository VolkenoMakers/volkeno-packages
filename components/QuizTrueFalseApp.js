import React from "react";

import QuizeTrueFalse from "../react-native-quiz-true-false";

const QuizTrueFalseApp = () => {
  const data = [
    {
      question:
        "Pendant la préhistoire, la période l’âge de la pierre polie a suivi l’age de la pierre taillée",
      answer: true,
    },
    {
      question:
        "Une personne qui parle couramment le français est un Francophone :",

      answer: true,
    },
    {
      question:
        "Quel petit signe place-t-on parfois sous la lettre C ? Une virgule",
      answer: false,
    },
  ];
  return (
    <QuizeTrueFalse
      containerStyle={{ backgroundColor: "#FFF", paddingTop: 30 }}
      questionTitleStyle={{ fontSize: 22, color: "#000" }}
      trueText="Vrai"
      falseText="Faux"
      textStyle={{ fontSize: 18, color: "#000" }}
      checkedColor={"#000"}
      uncheckedColor="#000"
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

export default QuizTrueFalseApp;
