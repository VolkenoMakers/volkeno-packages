import React from "react";
import { create, act } from "react-test-renderer";
import { render } from "@testing-library/react-native";
import QuizeTrueFalse from "../react-native-quiz-true-false/lib/QuizeTrueFalse";
const data = [
  {
    question: "Q1",
    answer: true,
  },
  {
    question: "Q2",

    answer: true,
  },
  {
    question: "Q3",
    answer: false,
  },
];
function getComponent(props) {
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
      onEnd={(results) => {}}
      data={data}
      {...props}
    />
  );
}

describe("<QuizeTrueFalse />", () => {
  test("render correctly", () => {
    const tree = render(getComponent());
    expect(tree).toBeDefined();
  });
  test("prev disabled", () => {
    const tree = create(getComponent());
    const prev = tree.root.findByProps({ testID: "Prev" }).props;
    expect(prev.disabled).toBe(true);
  });
  test("next not disabled", async () => {
    const tree = create(
      getComponent(data, {
        responseRequired: false,
      })
    );
    const next = tree.root.findByProps({ testID: "Next" });
    expect(next.props.disabled).toBe(false);
  });

  // test("get results", async () => {
  //   const handelEnd = jest.fn((data) => {
  //     const res = data.map((d) => d.isRight);
  //     return res;
  //   });
  //   const tree = create(
  //     getComponent(data, {
  //       onEnd: handelEnd,
  //     })
  //   );
  //   const next = tree.root.findByProps({ testID: "Next" });
  //   act(() => {
  //     tree.root.findByProps({ testID: "R1" }).props.onPress();
  //   });
  //   act(() => {
  //     tree.root.findByProps({ testID: "R2" }).props.onPress();
  //   });
  //   act(() => {
  //     next.props.onPress();
  //   });
  //   act(() => {
  //     tree.root.findByProps({ testID: "R21" }).props.onPress();
  //   });
  //   act(() => {
  //     next.props.onPress();
  //   });
  //   expect(handelEnd).toBeCalled();
  // });
});
