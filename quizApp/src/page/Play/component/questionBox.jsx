import {
  Button,
  Card,
  CardContent,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { QUESTIONS } from "../../../data/QUESTIONS";
import AnswersBox from "./answersBox";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import DialogSubmit from "./dialogSubmit";

function QuestionBOX(props) {
  const {
    selectedValue,
    setSelectedValue,
    numberEasy,
    numberMedium,
    numberHard,
    handleDeleteAll,
  } = props;
  const [open, setOpen] = React.useState(false);
  const [dataQuestion, setDataQuestion] = useState(QUESTIONS);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };

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
              name={`radio-buttons-group ${index}`}
            >
              <AnswersBox
                questionId={ques.id}
                selectAnswers={selectedValue}
                setAnswerValue={setSelectedValue}
                correctAns={ques.correctAnswer}
                incorrectAns={ques.incorrectAnswers}
              />
            </RadioGroup>
          </CardContent>
        </Card>
      ))}
      <Card
        sx={{
          mt: "30px",
          width: "50%",
          display: "flex",
          justifyContent: "space-evenly",
          backgroundColor: "#eee",
          mb: "20px",
          boxShadow: "none",
        }}
      >
        <Button
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={handleDeleteAll}
        >
          Delete all
        </Button>
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleClickOpen}
        >
          Submit your answer
        </Button>
        <DialogSubmit
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
          dataQuestion={dataQuestion}
        />
      </Card>
    </>
  );
}
export default QuestionBOX;
