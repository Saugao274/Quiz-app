import {
  Box,
  Button,
  Card,
  CardContent,
  FormControlLabel,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
function Play() {
  return (
    <>
      <Box
        sx={{
          minWidth: "100vw",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          // backgroundColor: "#eee",
          flexDirection: "column",
          backgroundColor: "#eeeeee",
          // lineHeight: "30px",
        }}
      >
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
              // id="outlined-multiline-static"
              label="Easy"
              multiline
              defaultValue="0"
              // sx={{ mr: "5px" }}
            ></TextField>
            <TextField
              // id="outlined-multiline-static"
              label="Medium"
              multiline
              defaultValue="0"
              // sx={{ ml: "5px", mr: "5px" }}
            ></TextField>
            <TextField
              id="outlined-multiline-static"
              label="Hard"
              multiline
              // sx={{ ml: "5px" }}
              defaultValue="0"
            ></TextField>
          </CardContent>
          <Button
            variant="contained"
            size="medium"
            fullWidth
            // sx={{ width: "50%" }}
            // onClick={handleLogin}
          >
            Generate
          </Button>
        </Card>
        <Card sx={{ width: "70%", mt: "50px", backgroundColor: "#eee" }}>
          <CardContent
            sx={{
              borderLeft: "solid 0.3em #fff",
              borderLeftColor: "green",
              backgroundColor: "#fff",
              mb: "20px",
            }}
          >
            <Typography variant="h6">Question 1: What ....</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Your answer
            </Typography>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </CardContent>
          <CardContent
            sx={{
              borderLeft: "solid 0.3em #fff",
              borderLeftColor: "green",
              backgroundColor: "#fff",
              pb: "20px",
            }}
          >
            <Typography variant="h6">Question 1: What ....</Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Your answer
            </Typography>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="female"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </CardContent>
        </Card>
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
        >
          <Button variant="outlined" startIcon={<DeleteIcon />}>
            Delete all
          </Button>
          <Button variant="contained" endIcon={<SendIcon />}>
            Submit your answer
          </Button>
        </Card>
      </Box>
    </>
  );
}

export default Play;
