import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Dialog from "@mui/material/Dialog";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SignModal from "./SignModal";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#FFA999", // Main color for the navbar
    },
    background: {
      default: "#FF5500", // Darker orange color
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          height: "90px", // Increased height of the navbar
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "15px", // Rounded corners of the button
          fontSize: "18px", // Increased button text size
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          marginRight: "20px", // Increased space between each link
          fontWeight: "bold", // Bold text
          fontSize: "18px", // Increased link text size
        },
      },
    },
  },
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLoginButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Box>
            <img
              src="https://i.ibb.co/T0TXZD0/en-logo-top.png"
              alt="Logo"
              style={{ height: "80px", width: "auto", marginLeft: "20px" }}
            />
          </Box>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
              size="large"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
            >
              <MenuItem onClick={handleMenuClose}>
                <Link
                  component={RouterLink}
                  to="/room501"
                  color="inherit"
                  underline="none"
                >
                  כיתות
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="#" color="inherit" underline="none">
                  אתר האוניברסיטה
                </Link>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Link href="#" color="inherit" underline="none">
                  תמיכה
                </Link>
              </MenuItem>
            </Menu>
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" }, flexGrow: 1 }}>
            <Link
              component={RouterLink}
              to="/room501"
              color="inherit"
              underline="none"
            >
              כיתות
            </Link>
            <Link href="#" color="inherit" underline="none">
              אתר האוניברסיטה
            </Link>
            <Link href="#" color="inherit" underline="none">
              תמיכה
            </Link>
          </Box>
          <Button
            color="inherit"
            onClick={handleLoginButtonClick}
            sx={{
              backgroundColor: "#FF8000",
              fontSize: "15px",
              marginLeft: "auto",
            }}
          >
            כניסת מנהל
          </Button>
        </Toolbar>
      </AppBar>
      <Dialog
        open={showModal}
        onClose={handleCloseModal}
        aria-labelledby="sign-modal"
      >
        <SignModal onClose={handleCloseModal} />
      </Dialog>
    </ThemeProvider>
  );
};

export default Navbar;
