import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageScroll1 from "../components/ImageScroll1";
import WordsGallery from "../components/WordsGallery";

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
  const isMediumDevice = useMediaQuery(theme.breakpoints.down("md"));
  const words = [
    "React",
    "JavaScript",
    "Material-UI",
    "Tags",
    "Gallery",
    "React",
    "JavaScript",
    "Material-UI",
    "Tags",
    "Gallery",
    "React",
    "JavaScript",
    "Material-UI",
    "Tags",
    "Gallery",
    "React",
    "JavaScript",
    "Material-UI",
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#111111",
          height: "100vh",
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
            fontSize: isSmallDevice ? 50 : 75,
            padding: isMediumDevice ? "0 10px" : "0 0",
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
        <Link to={"/ourProjects"} style={{marginBottom:"50px"}}>
          <Button
            variant="contained"
            color="ochre"
            sx={{
              marginTop: "2rem",
              width: "150px",
              height: "50px",
              borderRadius: "50px",
            }}
          >
            Explore
          </Button>
        </Link>
        {/* The ImageScroll1 component */}
        <ImageScroll1 /> 
      </Box>
      <WordsGallery words={words} />
    </ThemeProvider>
  );
};

export default HomePage;
