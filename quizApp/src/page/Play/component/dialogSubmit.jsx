import {
  Dialog,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";

function DialogSubmit(props) {
  const { onClose, selectedValue, open, dataQuestion } = props;
  const [rows, setRows] = useState([]);

  const handleClose = () => {
    onClose(selectedValue.id);
  };
  const listRows = () => {
    const data = dataQuestion.map((el) => {
      return {
        ...el,
        yourAnswer:
          selectedValue.filter((val) => {
            if (val.id == el.id) {
              return el;
            }
          })[0]?.answer || "",
      };
    });
    return data;
  };
  React.useEffect(() => {
    setRows(listRows());
  }, [selectedValue, dataQuestion]);
  console.log(rows, selectedValue);
  const getTotal = () => {
    let total = 0;
    {
      rows.filter((result) => {
        result.correctAnswer === result.yourAnswer ? total++ : total;
      });
    }
    return total;
  };

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
    >
      <TableContainer size="large" aria-label="a dense table">
        <TableRow>
          <TableCell>NO</TableCell>
          <TableCell align="center">Question</TableCell>
          <TableCell align="center">Your Answer</TableCell>
          <TableCell align="center">Correct Answer</TableCell>
          <TableCell align="center">Result</TableCell>
        </TableRow>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell scope="row">{index + 1}</TableCell>
              <TableCell align="left">{row.question.text}</TableCell>
              <TableCell align="left">{row.yourAnswer}</TableCell>
              <TableCell align="left">{row.correctAnswer}</TableCell>
              <TableCell align="left">
                {row.yourAnswer === row.correctAnswer ? "True" : "False"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableRow>
          <TableCell align="right" colSpan={4}>
            TOTAL
          </TableCell>
          <TableCell>
            {getTotal()}/{rows.length}
          </TableCell>
        </TableRow>
      </TableContainer>
    </Dialog>
  );
}

export default DialogSubmit;
