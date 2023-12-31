import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { ACCOUNTS } from "../../data/ACCOUNTS";

export const Validationschema = Yup.object().shape({
  username: Yup.string()
    .required("Username is empty!!!")
    .min(6, "Your username must be at least 6 characters!!!"),
  password: Yup.string()
    .required("Password is empty!!!")
    .min(8, "Your password must be at least 8 characters!!!")
    .max(32, "Your password must be at least 32 characters"),
});
function Login() {
  const [dataAcc] = useState(ACCOUNTS);
  const [inputValues, setInputValues] = useState({
    username: "",
    password: "",
  });

  const [validate, setValidate] = useState({
    username: false,
    password: false,
  });

  const navigate = useNavigate();

  const checkAcc = () => {
    return dataAcc.some((account) => {
      return (
        account.username === inputValues.username &&
        account.password === inputValues.password
      );
    });
  };
  const handleLogin = async () => {
    try {
      await Validationschema.validate(inputValues, { abortEarly: false });

      if (checkAcc()) {
        toast.success("Login successfully!!!");
        navigate("/play");
      } else {
        toast.error("Invalid username or password");
        setValidate({
          username: false,
          password: false,
        });
      }
    } catch (error) {
      let newValidate = {
        username: false,
        password: false,
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

  return (
    <Box
      sx={{
        minWidth: "100vw",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#eee",
        padding: 10,
      }}
    >
      <ToastContainer />
      <Card sx={{ minWidth: 600 }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" textAlign={"center"} marginBottom={2}>
            Login
          </Typography>
          <TextField
            error={validate.username}
            fullWidth
            id="outlined-basic"
            label="Username"
            variant="outlined"
            sx={{ flex: 3 }}
            onChange={(e) =>
              setInputValues({ ...inputValues, username: e.target.value })
            }
          />
          <TextField
            error={validate.password}
            fullWidth
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{ flex: 3, marginTop: 2 }}
            onChange={(e) =>
              setInputValues({ ...inputValues, password: e.target.value })
            }
          />
          <Button
            variant="contained"
            fullWidth
            sx={{ my: 2 }}
            onClick={handleLogin}
          >
            Play
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
