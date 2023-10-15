import { Card, CardContent, RadioGroup, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { QUESTIONS } from "../../../data/QUESTIONS";
import AnswersBox from "./answersBox";

const QuestionBOX = ({ numberEasy, numberMedium, numberHard }) => {
  // const [easyQuestion] = useState(
  //   QUESTIONS.filter((ques) => ques.difficulty === "easy")
  //     .sort(() => Math.random() - 0.5)
  //     .slice(0, numberEasy)
  //   // .sort(() => Math.random() - 0.5)
  // );
  const [dataQuestion, setDataQuestion] = useState(QUESTIONS);

  useEffect(() => {
    const easyQuestions = QUESTIONS.filter((ques) => ques.difficulty === "easy")
      .sort(() => Math.random() - 0.5)
      .slice(0, numberEasy);
    const mediumQuestions = QUESTIONS.filter(
      (ques) => ques.difficulty === "medium"
    )
      .sort(() => Math.random() - 0.5)
      .slice(0, numberMedium);

    const hardQuestions = QUESTIONS.filter((ques) => ques.difficulty === "hard")
      .sort(() => Math.random() - 0.5)
      .slice(0, numberHard);

    setDataQuestion(
      [...easyQuestions, ...mediumQuestions, ...hardQuestions].sort(
        () => Math.random() - 0.5
      )
    );
  }, [numberEasy, numberMedium, numberHard]);

  const colorDifficulty = (difficulty) => {
    return difficulty === "medium"
      ? "green"
      : difficulty === "hard"
      ? "red"
      : "orange";
  };

  return (
    <>
      {dataQuestion.map((ques, index) => (
        <Card
          key={index}
          sx={{ width: "70%", mt: "50px", backgroundColor: "#eee" }}
        >
          <CardContent
            sx={{
              borderLeft: "solid 0.3em #fff",
              borderLeftColor: colorDifficulty(ques.difficulty),
              backgroundColor: "#fff",
            }}
          >
            <Typography variant="h6">{ques.question.text}</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Your answer
            </Typography>

            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              // defaultValue=""
              name={`radio-buttons-group ${index}`}
            >
              <AnswersBox
                correctAns={ques.correctAnswer}
                incorrectAns={ques.incorrectAnswers}
              />
            </RadioGroup>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
export default QuestionBOX;
