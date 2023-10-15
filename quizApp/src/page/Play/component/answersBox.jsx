import { FormControlLabel, Radio } from "@mui/material";
import React, { useEffect, useState } from "react";

const AnswersBox = ({ correctAns, incorrectAns }) => {
  const [answers, setAnswers] = useState([]);
  useEffect(() => {
    setAnswers([correctAns, ...incorrectAns].sort(() => Math.random() - 0.5));
  }, [correctAns, incorrectAns]);
  return (
    <>
      {answers.map((answer, i) => (
        <FormControlLabel
          key={i}
          value={answer}
          control={<Radio />}
          label={answer}
        />
      ))}
    </>
  );
};

export default AnswersBox;
