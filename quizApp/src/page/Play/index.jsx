//rafc
import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";

import React, { useState } from "react";
import QuestionBOX from "./component/questionBox";
import * as Yup from "yup";
import { ToastContainer, toast } from "react-toastify";

export const Validationschema = Yup.object().shape({
  easy: Yup.number().typeError("Please input easy a number"),
  medium: Yup.number().typeError("Please input medium a number"),
  hard: Yup.number().typeError("Please input hard a number"),
});

function Play() {
  const [selectedValue, setSelectedValue] = React.useState([]);
  //[{id,answer}]
  const [validate, setValidate] = useState({
    easy: false,
    hard: false,
    medium: false,
  });
  const [numbersGenerate, setNumbersGenerate] = useState({
    easy: 0,
    medium: 0,
    hard: 0,
  });
  const [choice, setChoice] = useState({
    easy: 0,
    medium: 0,
    hard: 0,
  });
  const handleGenerate = async () => {
    setSelectedValue([]);
    try {
      await Validationschema.validate(numbersGenerate, { abortEarly: false });
      setValidate({
        easy: false,
        medium: false,
        hard: false,
      });
      setChoice(numbersGenerate);
    } catch (error) {
      let newValidate = {
        easy: false,
        medium: false,
        hard: false,
      };
      for (let err of error.inner) {
        newValidate = {
          ...newValidate,
          [err.path]: true,
        };
        break;
      }
      setValidate(newValidate);
      toast.error(error.errors[0]);
    }
  };
  const handleDeleteAll = () => {
    setChoice({ easy: 0, medium: 0, hard: 0 });
    setNumbersGenerate({ easy: 0, medium: 0, hard: 0 });
  };

  return (
    <>
      <Box
        sx={{
          minWidth: "100vw",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          backgroundColor: "#eeeeee",
        }}
      >
        <ToastContainer />

        <Card sx={{ width: "50%", mt: "100px", p: "20px" }}>
          <Typography variant="h4" textAlign={"center"}>
            Add your question
          </Typography>
          <CardContent
            sx={{
              display: "flex",
              mt: "20px",
              mb: "20px",
              p: "0px",
              justifyContent: "space-between",
            }}
          >
            <TextField
              label="Easy"
              multiline
              error={validate.easy}
              value={numbersGenerate.easy.toString()}
              onChange={(e) => {
                setNumbersGenerate({
                  ...numbersGenerate,
                  easy: e.target.value.trim(),
                });
              }}
            ></TextField>
            <TextField
              label="Medium"
              multiline
              error={validate.medium}
              value={numbersGenerate.medium.toString()}
              onChange={(e) => {
                setNumbersGenerate({
                  ...numbersGenerate,
                  medium: e.target.value.trim(),
                });
              }}
            ></TextField>
            <TextField
              id="outlined-multiline-static"
              label="Hard"
              error={validate.hard}
              multiline
              onChange={(e) => {
                setNumbersGenerate({
                  ...numbersGenerate,
                  hard: e.target.value.trim(),
                });
              }}
              value={numbersGenerate.hard.toString()}
            ></TextField>
          </CardContent>
          <Button
            variant="contained"
            size="medium"
            fullWidth
            onClick={handleGenerate}
          >
            Generate
          </Button>
        </Card>
        <QuestionBOX
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
          numberEasy={choice.easy}
          numberMedium={choice.medium}
          numberHard={choice.hard}
          handleDeleteAll={handleDeleteAll}
        />
        <Card
          sx={{
            mt: "30px",
            width: "50%",
            display: "flex",
            justifyContent: "space-evenly",
            // padding: " 5px ",
            backgroundColor: "#eee",
            mb: "20px",
            boxShadow: "none",
          }}
        ></Card>
      </Box>
    </>
  );
}

export default Play;
