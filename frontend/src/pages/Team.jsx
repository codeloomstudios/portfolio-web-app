import React from "react";
import { Row, Col, Card, Tooltip, Button } from "antd";
import { createTheme } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { InView } from "react-intersection-observer";
import {
  GithubOutlined,
  TwitterOutlined,
  LinkedinOutlined,
  UserOutlined,
} from "@ant-design/icons";
import NewsLetterSection from "./NewsLetterSection";
import FAQSection from "./FAQSection";

const { Meta } = Card;

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    bio: "Frontend Developer",
    image:
      "https://static.vecteezy.com/system/resources/previews/005/228/939/original/avatar-man-face-silhouette-user-sign-person-profile-picture-male-icon-black-color-illustration-flat-style-image-vector.jpg",
    social: {
      github: "https://github.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },
  {
    id: 1,
    name: "John Doe",
    bio: "Frontend Developer",
    image:
      "https://static.vecteezy.com/system/resources/previews/005/228/939/original/avatar-man-face-silhouette-user-sign-person-profile-picture-male-icon-black-color-illustration-flat-style-image-vector.jpg",
    social: {
      github: "https://github.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },
  {
    id: 1,
    name: "John Doe",
    bio: "Frontend Developer",
    image:
      "https://static.vecteezy.com/system/resources/previews/005/228/939/original/avatar-man-face-silhouette-user-sign-person-profile-picture-male-icon-black-color-illustration-flat-style-image-vector.jpg",
    social: {
      github: "https://github.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },
  {
    id: 1,
    name: "John Doe",
    bio: "Frontend Developer",
    image:
      "https://static.vecteezy.com/system/resources/previews/005/228/939/original/avatar-man-face-silhouette-user-sign-person-profile-picture-male-icon-black-color-illustration-flat-style-image-vector.jpg",
    social: {
      github: "https://github.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
    },
  },
  // Add more team members as needed
];

const Team = () => {
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
      {/* Section 01 Hero */}
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
              padding: "0 20px",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              opacity: inView ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <Typography
              sx={{
                color: theme.palette.ochre.main,
                textAlign: "center",
                fontSize: isSmallDevice ? "38px" : isMediumDevice ? "40px" : "48px",
              }}
            >
              Meet the Team
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                textAlign: "center",
                fontSize: isSmallDevice ? "18px" : isMediumDevice ? "20px" : "24px",
              }}
            >
              We are a team of passionate developers and designers
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
              gutter={[16, 16]}
              style={{ display: "flex", justifyContent: "center", width:"70vw" }}
            >
              {teamMembers.map((member) => (
                <Col key={member.id} xs={24} sm={12} md={8} lg={8} xl={8}>
                  <Card
                    hoverable
                    cover={<img alt={member.name} src={member.image} />}
                  >
                    <Meta title={member.name} description={member.bio} />
                    <div style={{ marginTop: "10px" }}>
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GithubOutlined
                          style={{ fontSize: "20px", margin: "0 8px" }}
                        />
                      </a>
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <TwitterOutlined
                          style={{ fontSize: "20px", margin: "0 8px" }}
                        />
                      </a>
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedinOutlined
                          style={{ fontSize: "20px", margin: "0 8px" }}
                        />
                      </a>
                    </div>
                  </Card>
                </Col>
              ))}
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
      {/* Section 04 NewsLetter */}
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

export default Team;
