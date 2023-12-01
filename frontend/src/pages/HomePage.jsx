import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageScroll1 from "../components/ImageScroll1";
import WordsGallery from "../components/WordsGallery";
import { Image, Col, Row } from "antd";
import { illustration1, errorIMG } from "../images/LocalImageExport";

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
  const isLargeDevice = useMediaQuery(theme.breakpoints.down("lg"));
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
      {/* Section 01*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "70px",
          flexGrow: 1,
        }}
      >
        <Row style={{ width: "70vw", alignItems: "center" }}>
          <Col sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
            {" "}
            {/* Image Area */}
            <Image
              preview={false}
              src={illustration1}
              fallback={errorIMG}
              style={{ width: "100%", height: "100%" }}
            />
          </Col>
          <Col sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
            {" "}
            {/* Text Area */}
            <Typography
              style={{
                color: "#fff",
                fontSize: isSmallDevice
                  ? "36px"
                  : isMediumDevice
                  ? "40px"
                  : "48px",
                fontFamily: "'Syne', sans-serif",
                textAlign: "left",
              }}
            >
              Navigating the Future of Web Development
            </Typography>
            <Typography
              style={{
                color: "#fff",
                fontSize: isSmallDevice
                  ? "14px"
                  : isMediumDevice
                  ? "15px"
                  : "16px",
                fontFamily: "inter, sans-serif",
                textAlign: "left",
              }}
            >
              Discover seamless ways to design and develop with our expert web
              and app solutions. Empower your online presence effortlessly.
            </Typography>
            <Link to={"/aboutUs"} style={{ marginBottom: "50px" }}>
              <Button
                variant="contained"
                color="ochre"
                sx={{
                  marginTop: "2rem",
                  width: "150px",
                  height: "50px",
                  borderRadius: "50px",
                  float: "left",
                }}
              >
                About Us
              </Button>
            </Link>
          </Col>
        </Row>
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
