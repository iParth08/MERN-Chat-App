import { CameraAlt as CameraAltIcon } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { VisuallyHiddenInput } from "../components/style/StyledComponents";
import { useFileHandler, useInputValidation, useStrongPassword } from "6pp";
import { usernameValidator } from "../utils/validators";

const Login = () => {
  //variables state
  const [isLogin, setIsLogin] = useState(true); //show login

  //form states
  const name = useInputValidation("");
  const username = useInputValidation("", usernameValidator);
  const bio = useInputValidation("");
  //   const password = useStrongPassword();
  const password = useInputValidation(""); //todo: testing only

  //avatar state
  const avatar = useFileHandler("single", "1MB"); //! alert : check it later

  //functions
  const toggleLogin = () => {
    setIsLogin(!isLogin);
  };

  return (
    <Container
      component={"main"}
      maxWidth="xs"
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {isLogin ? (
          <>
            <Typography variant="h5">Login</Typography>
            <form
              style={{ marginTop: "1rem", width: "100%" }}
              onSubmit={handleLogin}
            >
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />

              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: "1rem" }}
              >
                Login
              </Button>

              <Typography textAlign={"center"} sx={{ marginTop: "1rem" }}>
                Don't have an account?
              </Typography>
              <Button
                fullWidth
                variant="outlined"
                color="secondary"
                sx={{ marginTop: "1rem" }}
                onClick={toggleLogin}
              >
                Sign Up to Hive
              </Button>
            </form>
          </>
        ) : (
          <>
            <Typography variant="h5">Sign Up</Typography>
            <form
              style={{ marginTop: "1rem", width: "100%" }}
              onSubmit={handleSignup}
            >
              {/* Setting avatar */}
              <Stack position={"relative"} width={"10rem"} margin={"auto"}>
                <Avatar
                  sx={{ width: "10rem", height: "10rem", objectFit: "contain" }}
                  src={avatar.preview}
                />
                {
                  //if password is not strong enough
                  avatar.error && (
                    <Typography color={"error"} variant="caption">
                      {avatar.error}
                    </Typography>
                  )
                }

                <IconButton
                  sx={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    color: "white",
                    bgcolor: "rgba(0, 0, 0, 0.5)",
                    ":hover": { bgcolor: "rgba(0, 0, 0, 0.7)" },
                  }}
                  component={"label"}
                >
                  <>
                    <CameraAltIcon />
                    <VisuallyHiddenInput
                      type="file"
                      onChange={avatar.changeHandler}
                    />
                  </>
                </IconButton>
              </Stack>
              <TextField
                required
                fullWidth
                label="Name"
                margin="normal"
                variant="outlined"
                value={name.value}
                onChange={name.changeHandler}
              />
              <TextField
                required
                fullWidth
                label="Username"
                margin="normal"
                variant="outlined"
                value={username.value}
                onChange={username.changeHandler}
              />

              {
                //if username is not valid
                username.error && (
                  <Typography color={"error"} variant="caption">
                    {username.error}
                  </Typography>
                )
              }

              <TextField
                required
                fullWidth
                label="Bio"
                margin="normal"
                variant="outlined"
                value={bio.value}
                onChange={bio.changeHandler}
              />

              <TextField
                required
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                variant="outlined"
                value={password.value}
                onChange={password.changeHandler}
              />
              {
                //if password is not strong enough
                password.error && (
                  <Typography color={"error"} variant="caption">
                    {password.error}
                  </Typography>
                )
              }

              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ marginTop: "1rem" }}
              >
                Sign Up
              </Button>

              <Typography textAlign={"center"} sx={{ marginTop: "1rem" }}>
                Already have an account?
              </Typography>
              <Button
                fullWidth
                variant="outlined"
                color="success"
                sx={{ marginTop: "1rem" }}
                onClick={toggleLogin}
              >
                Log in to Hive
              </Button>
            </form>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Login;
