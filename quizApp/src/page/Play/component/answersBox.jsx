import { FormControlLabel, Radio } from "@mui/material";
import { useEffect, useState } from "react";

const AnswersBox = ({
  correctAns,
  incorrectAns,
  questionId,
  setAnswerValue,
  selectAnswers,
}) => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setAnswers([correctAns, ...incorrectAns].sort(() => Math.random() - 0.5));
  }, [correctAns, incorrectAns]);

  const handleSubmit = (answer) => {
    setAnswerValue(() => {
      const array = selectAnswers.filter((fil) => {
        if (fil.id !== questionId) return fil;
      });
      return [...array, { id: questionId, answer: answer.target.value }];
    });
  };
  return (
    <>
      {answers.map((answer, i) => (
        <FormControlLabel
          key={i}
          value={answer}
          control={<Radio />}
          label={answer}
          onChange={handleSubmit}
        />
      ))}
    </>
  );
};

export default AnswersBox;
