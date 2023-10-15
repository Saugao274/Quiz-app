import { FormControlLabel, Radio } from "@mui/material";
import React, { useState } from "react";

const AnswersBox = ({ correctAns, incorrectAns }) => {
  const [answers] = useState([correctAns, ...incorrectAns]);

  return (
    <>
      {answers
        .sort(() => Math.random() - 0.5)
        .map((answer, i) => (
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
