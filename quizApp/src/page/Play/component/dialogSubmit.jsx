import {
  Dialog,
  IconButton,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
function DialogSubmit(props) {
  const { onClose, selectedValue, open, dataQuestion } = props;
  const [rows, setRows] = useState([]);

  const handleClose = () => {
    onClose(selectedValue);
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
        <TableHead
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            m: "10px",
            mt: "20px",
          }}
        >
          <TableHead colSpan={5} sx={{ fontWeight: "800", fontSize: "small" }}>
            TABLE RESULT
          </TableHead>

          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </TableHead>
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
        <TableFooter>
          <TableCell align="right" colSpan={4} sx={{ fontWeight: "800" }}>
            TOTAL
          </TableCell>
          <TableCell sx={{ fontWeight: "800" }}>
            {getTotal()}/{rows.length}
          </TableCell>
        </TableFooter>
      </TableContainer>
    </Dialog>
  );
}

export default DialogSubmit;
