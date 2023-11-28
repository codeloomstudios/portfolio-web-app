import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageScroll1 from "../components/ImageScroll1";

const HomePage = () => {
  // Create the theme with the specified color
  const theme = createTheme({
    palette: {
      ochre: {
        main: "#ccff02", // Change the main color to #ccff02
        light: "#e6ff4e", // You can adjust the light and dark shades accordingly
        dark: "#99cc01",
        contrastText: "#242105",
      },
    },
  });

  // Use media query with the created theme
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#111111",
          height: "90vh",
          display: "flex",
          marginTop: "15vh",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* The Hero section */}
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: isSmallDevice ? 50 : 65,
            fontFamily: "Syne Mono, monospace",
          }}
        >
          Welcome to my site
        </Typography>
        <Typography
          sx={{
            color: "#ffffff",
            fontSize: 20,
            fontFamily: "inter, sans-serif",
          }}
        >
          This is a subtitle
        </Typography>
        <Link to={"/ourProjects"}>
        <Button variant="contained" color="ochre" sx={{ marginTop: "2rem", width: "150px", height: "50px", borderRadius: "50px" }}>
          Explore
        </Button>
        </Link>

        <ImageScroll1 />
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
