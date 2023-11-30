import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageScroll1 from "../components/ImageScroll1";
import WordsGallery from "../components/WordsGallery";
import { Image } from "antd";
import { test1, test2, test3 } from "../images/LocalImageExport";

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
        <Link to={"/ourProjects"} style={{ marginBottom: "50px" }}>
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
        <ImageScroll1 /> {/* The ImageScroll1 component */}
      </Box>
      <WordsGallery words={words} /> {/* The WordsGalery component */}
      {/* Section */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "70px",
        }}
      >
        <Box sx={{ display: "flex", width: "70vw", alignItems:"center", justifyContent:"center" }}>
          <Box sx={{ display: "flex" }}>
            {" "}
            {/* The Image Side */}
            <Box>
              <Image
                width={300}
                src={test2}
                preview={false}
                fallback="https://i.ibb.co/0FTQSN9/error-img.png"
              />
            </Box>
            <Box>
              <Box>
                <Image
                  width={200}
                  src={test1}
                  preview={false}
                  fallback="https://i.ibb.co/0FTQSN9/error-img.png"
                />
              </Box>
              <Box>
                <Image
                  width={222}
                  src={test3}
                  preview={false}
                  fallback="https://i.ibb.co/0FTQSN9/error-img.png"
                />
              </Box>
            </Box>
          </Box>
          {/* The Text Side */}
          <Box
            sx={{
              textAlign: "left",
              marginLeft: "80px",
            }}
          >
            <Typography
              style={{
                color: "#fff",
                fontSize: "15px",
                fontWeight: 600,
                fontFamily: "inter, sans-serif",
              }}
            >
              WELCOME
            </Typography>
            <Typography
              style={{
                color: "#fff",
                fontSize: "48px",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              Easy ways to use <br /> AI tools, and tools <br /> to build AI.
            </Typography>
            <Typography
              style={{
                color: "#fff",
                fontSize: "16px",
                fontFamily: "inter, sans-serif",
              }}
            >
              Dicta sunt explicabo. Nemo enim ipsam voluptatem quia <br />{" "}
              voluptas sit aspernatur aut odit aut fugit, sed quia.
            </Typography>
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
