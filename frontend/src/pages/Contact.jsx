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

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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
      await form.validateFields(); // Validate fields before submitting
      setLoading(true);
      await axios.post("http://localhost:5000/contact/addContact", formData);
      message.success("Message Sent!");
      form.resetFields();
    } catch (error) {
      message.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

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
                fontSize: isSmallDevice
                  ? "38px"
                  : isMediumDevice
                  ? "40px"
                  : "48px",
                fontFamily: "Syne Mono, monospace",
              }}
            >
              Contact Us
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
              Contact us by filling out the form below
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
              padding: "0 20px",
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
                backgroundColor: "#343541",
                padding: "20px",
                borderRadius: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 12 }}
                xxl={{ span: 12 }}
              >
                <Card
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  <Image
                    src={illustration1}
                    alt="illustration1"
                    preview={false}
                    fallback={errorIMG}
                  />
                </Card>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                xl={{ span: 12 }}
                xxl={{ span: 12 }}
              >
                <Card
                  style={{
                    backgroundColor: "transparent",
                    border: "none",
                    boxShadow: "none",
                  }}
                >
                  <Form
                    form={form}
                    style={{ width: "100%" }}
                    onFinish={handleSubmit}
                    layout="vertical"
                  >
                    <Form.Item
                      name="name"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your name",
                        },
                      ]}
                    >
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        size="large"
                        placeholder="Name"
                        prefix={<UserOutlined />}
                      />
                    </Form.Item>
                    <Form.Item
                      name="email"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your email",
                        },
                        {
                          type: "email",
                          message: "Please enter a valid email",
                        },
                      ]}
                    >
                      <Input
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        size="large"
                        placeholder="Email"
                        prefix={<MailOutlined />}
                      />
                    </Form.Item>
                    <Form.Item
                      name="message"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your message",
                        },
                      ]}
                    >
                      <TextArea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        size="large"
                        placeholder="Message"
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

export default Contact;
