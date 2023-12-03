import React from "react";
import { createTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { InView } from "react-intersection-observer";
import { Image, Col, Row } from "antd";
import NewsLetterSection from "./NewsLetterSection";
import FAQSection from "./FAQSection";

const Services = () => {
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
    <Box>
      {/* Section 01 + 02 */}
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <Box
            ref={ref}
            sx={{
              marginTop: isSmallDevice
                ? "50px"
                : isMediumDevice
                ? "75px"
                : "100px",
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
                display: "flex",
                flexDirection: "column",
                marginBottom: "50px",
              }}
            >
              {" "}
              {/* Row 1 */}
              {/* top texts */}
              <Typography
                sx={{
                  fontSize: isSmallDevice
                    ? "38px"
                    : isMediumDevice
                    ? "40px"
                    : "48px",
                  color: "#ccff02",
                }}
              >
                What We Offer
              </Typography>
              <Typography
                sx={{
                  fontSize: isSmallDevice
                    ? "16px"
                    : isMediumDevice
                    ? "17px"
                    : "20px",
                  color: "#fff",
                }}
              >
                Vestibulum eu libero volutpat, portas quam acc, tempus sem.
                Donec <br />
                sodales quam id lorem lobortis, interdum nisl.
              </Typography>
            </Row>
            <Row style={{ width: "80vw" }}>
              {" "}
              {/* Row 2 */}
              <Col
                sm={24}
                md={24}
                lg={8}
                xl={8}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                {" "}
                {/* Col for the left side */}
                <Row style={{ marginBottom: "20px" }}>
                  {" "}
                  {/* left item 1 */}
                  <Col
                    span={16}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "18px", color: "#fff" }}>
                      Metal Roofing
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#fff",
                        textAlign: "left",
                      }}
                    >
                      Vestibulum eu libero volutpat, portas quam acc, tempus
                      sem. Donec sodales quam id lorem lobortis, interdum nisl.
                    </Typography>
                  </Col>
                  <Col
                    span={8}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src="https://cdn-icons-png.flaticon.com/512/5175/5175601.png"
                      preview={false}
                      width={100}
                    />
                  </Col>
                </Row>
                <Row style={{ marginBottom: "20px" }}>
                  {" "}
                  {/* left item 2 */}
                  <Col
                    span={16}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "18px", color: "#fff" }}>
                      Metal Roofing
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#fff",
                        textAlign: "left",
                      }}
                    >
                      Vestibulum eu libero volutpat, portas quam acc, tempus
                      sem. Donec sodales quam id lorem lobortis, interdum nisl.
                    </Typography>
                  </Col>
                  <Col
                    span={8}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src="https://cdn-icons-png.flaticon.com/512/5175/5175601.png"
                      preview={false}
                      width={100}
                    />
                  </Col>
                </Row>
                <Row>
                  {" "}
                  {/* left item 3 */}
                  <Col
                    span={16}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "18px", color: "#fff" }}>
                      Metal Roofing
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#fff",
                        textAlign: "left",
                      }}
                    >
                      Vestibulum eu libero volutpat, portas quam acc, tempus
                      sem. Donec sodales quam id lorem lobortis, interdum nisl.
                    </Typography>
                  </Col>
                  <Col
                    span={8}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src="https://cdn-icons-png.flaticon.com/512/5175/5175601.png"
                      preview={false}
                      width={100}
                    />
                  </Col>
                </Row>
              </Col>
              <Col
                sm={24}
                md={24}
                lg={8}
                xl={8}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* For the middle image ...........................................*/}
                <Image
                  src="https://themes247.net/html5/construction-template/demo/assets/img/worker.png"
                  preview={false}
                />
              </Col>
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
                {" "}
                {/* Col for the right side */}
                <Row style={{ marginBottom: "20px" }}>
                  {" "}
                  {/* right item 1 */}
                  <Col
                    span={8}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src="https://cdn-icons-png.flaticon.com/512/5175/5175601.png"
                      preview={false}
                      width={100}
                    />
                  </Col>
                  <Col
                    span={16}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "18px", color: "#fff" }}>
                      Metal Roofing
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#fff",
                        textAlign: "left",
                      }}
                    >
                      Vestibulum eu libero volutpat, portas quam acc, tempus
                      sem. Donec sodales quam id lorem lobortis, interdum nisl.
                    </Typography>
                  </Col>
                </Row>
                <Row style={{ marginBottom: "20px" }}>
                  {" "}
                  {/* right item 2 */}
                  <Col
                    span={8}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src="https://cdn-icons-png.flaticon.com/512/5175/5175601.png"
                      preview={false}
                      width={100}
                    />
                  </Col>
                  <Col
                    span={16}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "18px", color: "#fff" }}>
                      Metal Roofing
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#fff",
                        textAlign: "left",
                      }}
                    >
                      Vestibulum eu libero volutpat, portas quam acc, tempus
                      sem. Donec sodales quam id lorem lobortis, interdum nisl.
                    </Typography>
                  </Col>
                </Row>
                <Row
                  style={{
                    marginTop: isSmallDevice
                      ? "20px"
                      : isMediumDevice
                      ? "20px"
                      : "0px",
                  }}
                >
                  {" "}
                  {/* right item 3 */}
                  <Col
                    span={8}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      src="https://cdn-icons-png.flaticon.com/512/5175/5175601.png"
                      preview={false}
                      width={100}
                    />
                  </Col>
                  <Col
                    span={16}
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Typography sx={{ fontSize: "18px", color: "#fff" }}>
                      Metal Roofing
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: "#fff",
                        textAlign: "left",
                      }}
                    >
                      Vestibulum eu libero volutpat, portas quam acc, tempus
                      sem. Donec sodales quam id lorem lobortis, interdum nisl.
                    </Typography>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Box>
        )}
      </InView>
      {/* Section 03 FAQ */}
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <Box
            ref={ref}
            sx={{
              marginTop: isSmallDevice
                ? "50px"
                : isMediumDevice
                ? "75px"
                : "100px",
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
      {/* Section 04 Newsletter */}
      <InView triggerOnce={true}>
        {({ inView, ref }) => (
          <Box
            ref={ref}
            sx={{
              marginTop: isSmallDevice
                ? "50px"
                : isMediumDevice
                ? "75px"
                : "100px",
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
  );
};

export default Services;
