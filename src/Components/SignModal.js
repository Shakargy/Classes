import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const SignModal = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginData, setLoginData] = useState({
    login_email: "",
    login_password: ""
  });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleLoginClick = (event) => {
    event.preventDefault();
    setLoading(true);

    // Perform your login logic here
    // ...

    setLoading(false);
    setErrorMessage("Invalid email or password");
  };

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={true}>
      <Box sx={{ p: isMobile ? 2 : 4, minWidth: 400, textAlign: "center" }}>
        <DialogTitle disableTypography>
          <Typography variant="h4" sx={{ fontSize: "1.5rem", mb: 2 }}>
            התחברות
          </Typography>
        </DialogTitle>

        <TextField
          type="email"
          placeholder="אימייל"
          name="login_email"
          variant="outlined"
          fullWidth
          size="small"
          onChange={handleInputChange}
          sx={{ mb: 2 }}
          InputLabelProps={{ sx: { textAlign: "center" } }}
          inputProps={{ style: { textAlign: "center" } }}
        />
        <TextField
          type="password"
          placeholder="סיסמה"
          name="login_password"
          variant="outlined"
          fullWidth
          size="small"
          onChange={handleInputChange}
          sx={{ mb: 2 }}
          InputLabelProps={{ sx: { textAlign: "center" } }}
          inputProps={{ style: { textAlign: "center" } }}
        />
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          ?שכחת את הסיסמה
        </Typography>
        <Button
          onClick={handleLoginClick}
          disabled={loading}
          variant="contained"
          fullWidth
          size="large"
          sx={{ bgcolor: "#FF8000", color: "white", mb: 2 }}
        >
          {loading ? <CircularProgress size={20} /> : "התחבר"}
        </Button>
        {errorMessage && (
          <Typography variant="body2" color="error" sx={{ mb: 2 }}>
            {errorMessage}
          </Typography>
        )}
      </Box>
    </Dialog>
  );
};

export default SignModal;
