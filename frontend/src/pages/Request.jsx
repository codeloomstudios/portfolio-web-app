import React, { useState } from "react";
import axios from "axios";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { UserOutlined, MailOutlined } from "@ant-design/icons";
import ImageScroll1 from "../components/ImageScroll1";
import WordsGallery from "../components/WordsGallery";
import CounterUp from "../components/CounterUp";
import { Image, Col, Row, Form, Card, Input, message } from "antd";
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

const { TextArea } = Input;

const Request = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    request: "",
  });

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
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm(); // Create a form instance

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    try {
      await form.validateFields(); // Validate the form fields
      setLoading(true);
      await axios.post("http://localhost:5000/request/addRequest", formData);
      message.success("Thank you! We will send a response as soon as possible.");
      form.resetFields();
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Request failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      {/* Section 01 */}
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
              Make a Request
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
              bla bla bla Make a Request bbla bla bla
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
            <Row>
              {" "}
              {/* Row 01 image*/}
              <Image src={illustration1} preview={false} />
            </Row>
            <Row>
              {" "}
              {/* Row 02 text*/}
              <Card
                style={{
                  width: "70vw",
                  backgroundColor: "#ccff02",
                  border: "none",
                  minHeight: "150px",
                  marginTop: "50px",
                  padding: isSmallDevice ? "0px" : isMediumDevice ? "0px 50px" : "0px 50px",
                }}
              >
                <Typography style={{ textAlign: "center", fontSize: isSmallDevice ? "20px" : isMediumDevice ? "22px" : "24px", color:"red" }}>
                  *Important
                </Typography>
                <Typography style={{ textAlign: "center", fontSize: isSmallDevice ? "16px" : isMediumDevice ? "18px" : "20px", fontWeight:'bold' }}>
                  Please read the following instructions carefully before making
                  a request.
                </Typography> <br />
                <Typography style={{ textAlign: "left", fontSize: isSmallDevice ? "14px" : isMediumDevice ? "14px" : "16px" }}>
                  1. Please fill in the form below with your name, email and your
                  requirements. <br />
                  2. Please describe your requirements as clearly as possible. <br />
                  3. Please make sure that your email is correct. <br />
                  4. If you use the same email twice, even with a different name, the request will be added to the existing email. <br />
                  5. Please make sure that your requirements are not against the law. <br />
                  6. We will send you an email with our response. Please stay tuned to your inbox. <br />
                </Typography>
              </Card>
            </Row>
            <Row>
              {" "}
              {/* Row 03 form*/}
              <Card
                style={{
                  backgroundColor: "#1e1e1e",
                  border: "none",
                  borderRadius: "30px",
                  marginTop: "50px",
                  width: "70vw",
                }}
              >
                <Form
                  form={form}
                  onFinish={handleSubmit}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "40px",
                  }}
                >
                  <Form.Item
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
                  >
                    <Input
                      name="name"
                      placeholder="Name"
                      size="large"
                      prefix={<UserOutlined />}
                      onChange={handleInputChange}
                      allowClear={true}
                      style={{
                        margin: "10px",
                        width: "50vw",
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="email"
                    rules={[
                      {
                        required: true,
                        message: "Please input your email!",
                      },
                    ]}
                  >
                    <Input
                      name="email"
                      placeholder="Email"
                      size="large"
                      prefix={<MailOutlined />}
                      allowClear={true}
                      onChange={handleInputChange}
                      style={{
                        margin: "10px",
                        width: "50vw",
                      }}
                    />
                  </Form.Item>
                  <Form.Item
                    name="request"
                    rules={[
                      {
                        required: true,
                        message: "Please input your requirements!",
                      },
                    ]}
                  >
                    <TextArea
                      name="request"
                      placeholder="Please describe your requirements shortly."
                      onChange={handleInputChange}
                      size="large"
                      rows={10}
                      allowClear={true}
                      style={{
                        margin: "10px",
                        width: "50vw",
                      }}
                    />
                  </Form.Item>
                  <Form.Item>
                    <Button
                      type="primary"
                      htmlType="submit"
                      variant="contained"
                      style={{
                        backgroundColor: "#ccff02",
                        color: "#242105",
                        marginLeft: "5px",
                        height: "40px",
                        width: "100px",
                      }}
                      loading={loading}
                    >
                      Submit
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
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

export default Request;
