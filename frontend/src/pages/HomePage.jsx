import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import ImageScroll1 from "../components/ImageScroll1";
import WordsGallery from "../components/WordsGallery";
import CounterUp from "../components/CounterUp";
import { Image, Col, Row, Card } from "antd";
import {
  illustration1,
  illustration2,
  illustration3,
  illustration4,
  illustration5,
  errorIMG,
} from "../images/LocalImageExport";
import { InView } from "react-intersection-observer";
import FAQSection from "./FAQSection";
import NewsLetterSection from "./NewsLetterSection";

const { Meta } = Card;

const HomePage = () => {
  const theme = createTheme({
    palette: {
      ochre: {
        main: "#ccff02",
        light: "#e6ff4e",
        dark: "#99cc01",
        contrastText: "#242105",
      },
    },
  });

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
        <ImageScroll1 />
      </Box>

      <WordsGallery words={words} />

      {/* Section 01 */}
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <Box
            ref={ref}
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "70px",
              flexGrow: 1,
              opacity: inView ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <Row style={{ width: "70vw", alignItems: "center" }}>
              <Col sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
                <Image
                  preview={false}
                  src={illustration1}
                  fallback={errorIMG}
                  style={{ width: "100%", height: "100%" }}
                />
              </Col>
              <Col sm={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
                <Typography
                  style={{
                    color: "#fff",
                    fontSize: isSmallDevice
                      ? "36px"
                      : isMediumDevice
                      ? "40px"
                      : "48px",
                    fontFamily: "Syne, sans-serif",
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
                  Discover seamless ways to design and develop with our expert
                  web and app solutions. Empower your online presence
                  effortlessly.
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
        )}
      </InView>

      {/* Section 02 */}
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <Box
            ref={ref}
            sx={{
              marginTop: "100px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              opacity: inView ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <Row
              style={{
                width: "70vw",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Col>
                <Typography
                  style={{
                    color: "#fff",
                    fontFamily: "Syne, sans-serif",
                    fontSize: isSmallDevice
                      ? "36px"
                      : isMediumDevice
                      ? "40px"
                      : "48px",
                  }}
                >
                  Crafting Tomorrow's Web Today
                </Typography>
              </Col>
              <Col>
                <Typography
                  style={{
                    color: "#fff",
                    fontFamily: "inter, sans-serif",
                    fontSize: isSmallDevice
                      ? "14px"
                      : isMediumDevice
                      ? "15px"
                      : "16px",
                    marginBottom: "50px",
                  }}
                >
                  Start your digital journey with us. We bring you advanced web
                  and app solutions to enhance your brand and engage your
                  audience.
                </Typography>
              </Col>
            </Row>
            <Row
              style={{
                width: "70vw",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                preview={false}
                src={illustration1}
                fallback={errorIMG}
                style={{ width: "100%", height: "100%" }}
              />
            </Row>
          </Box>
        )}
      </InView>

      {/* Section 03 for CounterUp component */}
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <Box
            ref={ref}
            sx={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              opacity: inView ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <CounterUp />
          </Box>
        )}
      </InView>

      {/* Section 04 */}
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <Box
            ref={ref}
            sx={{
              marginTop: "100px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              opacity: inView ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <Row>
              <Typography
                style={{
                  color: "#fff",
                  fontFamily: "Syne, sans-serif",
                  fontSize: "48px",
                }}
              >
                Create your dream website with us
              </Typography>
            </Row>
            <Row
              style={{
                marginTop: "40px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              gutter={[40, 40]}
            >
              <Col>
                {" "}
                {/* card 1 */}
                <Card
                  style={{
                    width: 240,
                  }}
                  cover={
                    <img
                      alt="example"
                      src={illustration2}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </Col>
              <Col>
                {" "}
                {/* card 2 */}
                <Card
                  style={{
                    width: 240,
                  }}
                  cover={
                    <img
                      alt="example"
                      src={illustration3}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  }
                >
                  <Meta title="Ehbnfgnj" description="wwwnhyjjnhom" />
                </Card>
              </Col>
              <Col>
                {" "}
                {/* card 3 */}
                <Card
                  style={{
                    width: 240,
                  }}
                  cover={
                    <img
                      alt="example"
                      src={illustration4}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  }
                >
                  <Meta
                    title="Euron hfgnbeat"
                    description="www.nhfgnhfgn.com"
                  />
                </Card>
              </Col>
              <Col>
                {" "}
                {/* card 4 */}
                <Card
                  style={{
                    width: 240,
                  }}
                  cover={
                    <img
                      alt="example"
                      src={illustration5}
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                  }
                >
                  <Meta
                    title="Europe Street beat"
                    description="www.instagram.com"
                  />
                </Card>
              </Col>
            </Row>
          </Box>
        )}
      </InView>

      {/* Section 05 for FAQ section component */}
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <Box
            ref={ref}
            sx={{
              marginTop: "50px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              opacity: inView ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <FAQSection />
          </Box>
        )}
      </InView>

      {/* Section 06 for NewsLetter section component */}
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <Box
            ref={ref}
            sx={{
              marginTop: "100px",
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              opacity: inView ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <NewsLetterSection />
          </Box>
        )}
      </InView>
    </ThemeProvider>
  );
};

export default HomePage;
