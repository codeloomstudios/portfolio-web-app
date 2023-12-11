import React, { useState, useEffect } from "react";
import { createTheme } from "@mui/material/styles";
import { Card, Button, Row, Col, message } from "antd";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { InView } from "react-intersection-observer";
import FAQSection from "./FAQSection";
import NewsLetterSection from "./NewsLetterSection";

const OurProjects = () => {
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

  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumDevice = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    // API endpoint for fetching projects
    const apiUrl = "http://localhost:5000/projectSample/getAllProjectSamples";

    // Fetch projects from the backend
    axios
      .get(apiUrl)
      .then((response) => {
        const filteredProjects = response.data.filter((project) => project.status === "active");
        setProjects(filteredProjects || []); // Ensure filteredProjects is an array or default to an empty array
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []);

  // function for viewing the project details page
  const viewProject = (projectId) => {
    navigate(`/project/${projectId}`);
    console.log(`View project with ID: ${projectId}`);
  };

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        display: "flex",
        flexDirection: "column",
        minHeight: "200px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
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
              marginBottom: "100px",
            }}
          >
            <Typography
              sx={{
                color: theme.palette.ochre.main,
                textAlign: "center",
                fontSize: isSmallDevice
                  ? "38px"
                  : isMediumDevice
                  ? "40px"
                  : "48px",
                fontFamily: "Syne Mono, monospace",
              }}
            >
              Project Samples
            </Typography>
            <Typography
              sx={{
                color: "#fff",
                textAlign: "center",
                fontSize: isSmallDevice
                  ? "18px"
                  : isMediumDevice
                  ? "20px"
                  : "24px",
              }}
            >
              Here is our bla bla bla
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
              backgroundColor: "transparent",
              width: "80vw",
              borderRadius: "10px",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: inView ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
            <Row
              gutter={[16, 16]}
              style={{ display: "flex", justifyContent: "center" }}
            >
              {Array.isArray(projects) &&
                projects.map((project) => (
                  <Col key={project.id} xs={24} sm={24} md={24} lg={12}>
                    <Card
                      title={project.title}
                      hoverable={false}
                      cover={
                        <img alt={project.title} src={project.thumbnail} />
                      }
                      style={{}}
                    >
                      <Card.Meta
                        title={project.title}
                        description={project.description}
                      />
                      <Button
                        type="primary"
                        style={{ backgroundColor: "#111", color: "#fff" }}
                        onClick={() => viewProject(project._id)}
                      >
                        View
                      </Button>
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

export default OurProjects;
