import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { InView } from "react-intersection-observer";
import { Image, Col, Row, Card, Progress, Carousel } from "antd";
import { illustration1, errorIMG } from "../images/LocalImageExport";
import CounterUp from "../components/CounterUp";
import ImageScroll2 from "../components/ImageScroll2";
import NewsLetterSection from "./NewsLetterSection";

const About = () => {
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

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: "#111111",
          minHeight: "100vh",
          display: "flex",
          marginTop: "80px",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* Section 01 - Hero section */}
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <Box
              ref={ref}
              sx={{
                opacity: inView ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <Typography
                sx={{
                  color: "#ccff02",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: isSmallDevice
                    ? "30px"
                    : isMediumDevice
                    ? "40px"
                    : "50px",
                  marginBottom: "1rem",
                  lineHeight: "1",
                }}
              >
                About
              </Typography>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: isSmallDevice
                    ? "16px"
                    : isMediumDevice
                    ? "18px"
                    : "20px",
                  marginBottom: "1rem",
                }}
              >
                A little bit about Us
              </Typography>
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
                width: "100vw",
                opacity: inView ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <Row>
                <Col sm={24} md={12} lg={12} xl={12}>
                  <Image
                    src="https://deon.qodeinteractive.com/wp-content/uploads/2021/11/About-us-img-1.jpg"
                    alt="about"
                    preview={false}
                    style={{ borderRadius: "20px" }}
                  />
                </Col>
                <Col
                  sm={24}
                  md={12}
                  lg={12}
                  xl={12}
                  style={{
                    paddingRight: isSmallDevice
                      ? "0px"
                      : isMediumDevice
                      ? "0px"
                      : "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ padding: "20px" }}>
                    <Typography
                      sx={{
                        color: "#fff",
                        textAlign: "left",
                        fontSize: isSmallDevice ? "14px" : "16px",
                        fontFamily: "inter, sans-serif",
                        lineHeight: "0.5",
                      }}
                    >
                      WHO WE ARE
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: isSmallDevice
                          ? "36px"
                          : isMediumDevice
                          ? "40px"
                          : "48px",
                        fontFamily: "Syne, sans-serif",
                        textAlign: "left",
                        marginBottom: "20px",
                        lineHeight: "1.2",
                      }}
                    >
                      Smart Platform Integration
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: isSmallDevice ? "14px" : "16px",
                        textAlign: "left",
                        fontFamily: "inter, sans-serif",
                      }}
                    >
                      Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                      tellus. Phasellus viverra nulla ut metus varius laoreet.
                      Quisque rutrum. Nam quam nunc, blandit vel, luctus
                      pulvinar, hendrerit id, lorem.
                    </Typography>
                  </Box>
                </Col>
              </Row>
            </Box>
          )}
        </InView>
        {/* Section 03 - Our Strength */}
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <Box
              ref={ref}
              sx={{
                opacity: inView ? 1 : 0,
                transition: "opacity 0.5s ease-in-out",
              }}
            >
              <Row gutter={[16, 16]} style={{ marginTop: isSmallDevice ? "50px" : isMediumDevice ? "75px" : "100px" }}>
                <Col
                  sm={24}
                  md={12}
                  lg={12}
                  xl={12}
                  style={{
                    paddingLeft: isSmallDevice
                      ? "0px"
                      : isMediumDevice
                      ? "0px"
                      : "100px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box sx={{ padding: "20px" }}>
                    <Typography
                      sx={{
                        color: "#fff",
                        textAlign: "left",
                        fontSize: isSmallDevice ? "14px" : "16px",
                        fontFamily: "inter, sans-serif",
                        lineHeight: "0.5",
                      }}
                    >
                      OUR PRACTICE
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: isSmallDevice
                          ? "36px"
                          : isMediumDevice
                          ? "40px"
                          : "48px",
                        fontFamily: "Syne, sans-serif",
                        textAlign: "left",
                        marginBottom: "20px",
                        lineHeight: "1.2",
                      }}
                    >
                      Our strength
                    </Typography>
                    <Typography
                      sx={{
                        color: "#fff",
                        fontSize: isSmallDevice ? "14px" : "16px",
                        textAlign: "left",
                        fontFamily: "inter, sans-serif",
                      }}
                    >
                      Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                      tellus. Phasellus viverra nulla ut metus varius laoreet.
                      Quisque rutrum. Nam quam nunc, blandit vel, luctus
                      pulvinar, hendrerit id, lorem.
                    </Typography>
                  </Box>
                </Col>
                <Col
                  sm={24}
                  md={12}
                  lg={12}
                  xl={12}
                  style={{
                    paddingLeft: isSmallDevice
                      ? "20px"
                      : isMediumDevice
                      ? "20px"
                      : "0",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    sx={{ color: "#fff", textAlign: "left", fontSize: "20px" }}
                  >
                    Design
                  </Typography>
                  <Progress
                    percent={80}
                    strokeColor={"#ccff02"}
                    style={{ width: isSmallDevice ? "300px" : "100%" }}
                  />
                  <Typography
                    sx={{ color: "#fff", textAlign: "left", fontSize: "20px" }}
                  >
                    Coding
                  </Typography>
                  <Progress percent={85} strokeColor={"#ccff02"} />
                  <Typography
                    sx={{ color: "#fff", textAlign: "left", fontSize: "20px" }}
                  >
                    Technology
                  </Typography>
                  <Progress percent={70} strokeColor={"#ccff02"} />
                </Col>
              </Row>
            </Box>
          )}
        </InView>
        {/* Section 04 */}
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <Box
              ref={ref}
              sx={{
                marginTop: isSmallDevice ? "50px" : isMediumDevice ? "75px" : "100px",
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
                    Start your digital journey with us. We bring you advanced
                    web and app solutions to enhance your brand and engage your
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
        {/* Section 05 for CounterUp component */}
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <Box
              ref={ref}
              sx={{
                marginTop: isSmallDevice ? "50px" : isMediumDevice ? "75px" : "100px",
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
        {/* Section 06 */}
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <Box
              ref={ref}
              sx={{
                marginTop: isSmallDevice ? "70px" : isMediumDevice ? "100px" : "130px",
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
                  width: "90vw",
                  display: "flex",
                  flexDirection: isSmallDevice
                    ? "column"
                    : isMediumDevice
                    ? "column"
                    : "row",
                  justifyContent: "center",
                }}
              >
                <Col
                  sm={24}
                  md={24}
                  lg={8}
                  xl={8}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    sx={{ color: "#fff", fontSize: "15px", lineHeight: "0.1" }}
                  >
                    OUR PORTFOLIO
                  </Typography>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontSize: isSmallDevice ? "40px" : "48px",
                      fontFamily: "Syne, sans-serif",
                    }}
                  >
                    Samples{" "}
                  </Typography>
                </Col>
                <Col sm={24} md={24} lg={8} xl={8}>
                  <Typography sx={{ color: "#fff", fontSize: "20px" }}>
                    Dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                    voluptas sit aspernatur aut odit aut fugit, sed quia.{" "}
                  </Typography>
                </Col>
                <Col sm={24} md={24} lg={8} xl={8}>
                  <Link to="/ourProjects">
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
                      View More
                    </Button>
                  </Link>
                </Col>
              </Row>
              <Row>
                <ImageScroll2 />
              </Row>
            </Box>
          )}
        </InView>
        {/* Section 07 Quote section */}
        <InView triggerOnce={true}>
          {({ inView, ref }) => (
            <Box
              ref={ref}
              sx={{
                marginTop: isSmallDevice ? "50px" : isMediumDevice ? "75px" : "100px",
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
                  width: "90vw",
                  display: "flex",
                  justifyContent: "center",
                }}
                gutter={
                  isSmallDevice
                    ? [30, 30]
                    : isMediumDevice
                    ? [30, 30]
                    : [200, 200]
                }
              >
                <Col
                  sm={24}
                  md={24}
                  lg={12}
                  xl={12}
                  style={{
                    borderRight: isSmallDevice
                      ? "none"
                      : isMediumDevice
                      ? "none"
                      : "1px solid #fff",
                    borderBottom: isSmallDevice
                      ? "1px solid #fff"
                      : isMediumDevice
                      ? "1px solid #fff"
                      : "none",
                  }}
                >
                  <Image
                    src="https://bplugins.net/zex/icons/quote-icon-style2.png"
                    preview={false}
                  />
                </Col>
                <Col sm={24} md={24} lg={12} xl={12}>
                  <Carousel
                    style={{
                      color: "#fff",
                      textAlign: "left",
                      background: "transparent",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <Box>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "20px",
                          textAlign: "left",
                        }}
                      >
                        {" "}
                        “It was clear that he has a lot of experience in
                        stewarding social media accounts. His feedback and
                        advice will most definitely help our organization." -
                        Gabe Oswald Lead Designers @Nike “It was clear that he
                        has a lot of experience in stewarding social media
                        accounts. His feedback and advice will most definitely
                        help our organization."{" "}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "20px",
                          textAlign: "left",
                          marginTop: "20px",
                        }}
                      >
                        {" "}
                        - Gabe Oswald 1{" "}
                      </Typography>
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "20px",
                          textAlign: "left",
                        }}
                      >
                        {" "}
                        “It was clear that he has a lot of experience in
                        stewarding social media accounts. His feedback and
                        advice will most definitely help our organization." -
                        Gabe Oswald Lead Designers @Nike “It was clear that he
                        has a lot of experience in stewarding social media
                        accounts. His feedback and advice will most definitely
                        help our organization."{" "}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "20px",
                          textAlign: "left",
                          marginTop: "20px",
                        }}
                      >
                        {" "}
                        - Gabe Oswald 2{" "}
                      </Typography>
                    </Box>
                    <Box sx={{ marginBottom: "40px" }}>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "20px",
                          textAlign: "left",
                        }}
                      >
                        {" "}
                        “It was clear that he has a lot of experience in
                        stewarding social media accounts. His feedback and
                        advice will most definitely help our organization." -
                        Gabe Oswald Lead Designers @Nike “It was clear that he
                        has a lot of experience in stewarding social media
                        accounts. His feedback and advice will most definitely
                        help our organization."{" "}
                      </Typography>
                      <Typography
                        sx={{
                          color: "#fff",
                          fontSize: "20px",
                          textAlign: "left",
                          marginTop: "20px",
                        }}
                      >
                        {" "}
                        - Gabe Oswald 3{" "}
                      </Typography>
                    </Box>
                  </Carousel>
                </Col>
              </Row>
            </Box>
          )}
        </InView>
        {/* Section 08 for NewsLetter section component */}
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
      </Box>
    </ThemeProvider>
  );
};

export default About;
