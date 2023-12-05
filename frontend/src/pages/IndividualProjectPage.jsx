import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { createTheme } from "@mui/material/styles";
import { Card, Row, Col, Button, Descriptions, Image, Spin } from "antd";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Typography } from "@mui/material";
import { ArrowLeftOutlined, EyeOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { InView } from "react-intersection-observer";
import FAQSection from "./FAQSection";
import NewsLetterSection from "./NewsLetterSection";

const IndividualProjectPage = () => {
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

  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumDevice = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    const apiUrl = `http://localhost:5000/projectSample/getProjectSample/${projectId}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setProject(response.data);
      })
      .catch((error) => {
        console.error("Error fetching project details:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [projectId]);

  if (loading) {
    return <Spin size="large" />;
  }

  if (!project) {
    return (
      <Box style={{ color: "#fff" }}>Error loading project details...</Box>
    );
  }

  const handleGoBack = () => {
    navigate(-1);
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
      <Box
        sx={{
          width: "80vw",
          display: "flex",
          justifyContent: "left",
          alignItems: "center",
        }}
      >
        {/* Back Button */}
        <Button
          type="primary"
          shape="circle"
          style={{ backgroundColor: theme.palette.ochre.dark }}
          icon={<ArrowLeftOutlined style={{ color: "#111" }} />}
          onClick={handleGoBack}
        />
      </Box>

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
                fontSize: isSmallDevice
                  ? "38px"
                  : isMediumDevice
                  ? "40px"
                  : "48px",
                fontFamily: "Syne Mono, monospace",
              }}
            >
              {project.projectName}
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
              {project.projectDiscription}
            </Typography>
          </Box>
        )}
      </InView>
      <Box
        sx={{
          backgroundColor: "transparent",
          width: "80vw",
          borderRadius: "10px",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <Card
          title={project.projectName}
          cover={
            <Image
              src={project.thumbnail}
              alt={project.projectName}
              preview={false}
            />
          }
          style={{ marginBottom: "50px" }}
        >
          <Descriptions></Descriptions>
        </Card>

        <Row
          gutter={[16, 16]}
          style={{ display: "flex", justifyContent: "center" }}
        >
          {project.samples &&
            project.samples.map((sample, index) => (
              <Col key={index} xs={24} sm={24} md={12} lg={12}>
                <Card>
                  <div style={{ height: "220px", overflow: "hidden" }}>
                    <Image
                      src={sample.images[0]}
                      alt={`Sample ${index + 1}`}
                      preview={{
                        mask: (
                          <div style={{ height: "100%", paddingTop: "150px" }}>
                            <EyeOutlined /> Preview
                          </div>
                        ),
                      }}
                      style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "100%",
                      }}
                    />
                  </div>
                  <Card.Meta
                    style={{ paddingTop: "20px" }}
                    title={sample.type}
                    description={sample.description}
                  />
                </Card>
              </Col>
            ))}
        </Row>
      </Box>
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

export default IndividualProjectPage;
