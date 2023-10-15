import {
  Card,
  CardContent,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { QUESTIONS } from "../../../data/QUESTIONS";
import AnswersBox from "./answersBox";

const QuestionBOX = () => {
  const [dataQuestion] = useState(QUESTIONS);
  const colorDifficulty = (difficulty) => {
    return difficulty === "medium"
      ? "green"
      : difficulty === "hard"
      ? "red"
      : "orange";
  };

  return dataQuestion.map((ques, index) => (
    <Card
      key={index}
      sx={{ width: "70%", mt: "50px", backgroundColor: "#eee" }}
    >
      {/* {randomAnswers(ques.correctAnswer, ques.incorrectAnswers)} */}

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
  ));
};
export default QuestionBOX;
