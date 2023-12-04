import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Col, Row, Form, Input, Button, message } from "antd";
import axios from "axios";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box, Typography } from "@mui/material";

const NewsLetterSection = () => {
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

  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm(); // Create a form instance

  const isSmallDevice = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumDevice = useMediaQuery(theme.breakpoints.down("md"));

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      // Replace the URL with your actual API endpoint
      await axios.post(
        "http://localhost:5000/newsletterEmails/addEmail",
        values
      );
      message.success("Subscription successful!");

      // Reset the form fields after successful submission
      form.resetFields();
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Subscription failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        display: "flex",
        minHeight: "200px",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ccff02",
          width: "70vw",
          borderRadius: "10px",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Row
          gutter={{ xs: 8, sm: 16, md: 24, lg: 0 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Typography
              variant="h4"
              color="#111"
              style={{ marginTop: "15px", fontFamily: "Syne, sans-serif" }}
            >
              Subscribe For The Updates
            </Typography>
          </Col>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "20px",
            }}
          >
            <Form
              form={form}
              onFinish={handleSubmit}
              style={{
                display: "flex",
                flexDirection: isSmallDevice ? "column" : isMediumDevice ? "row" : "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input a valid email!",
                  },
                ]}
              >
                <Input
                  allowClear={true}
                  placeholder="Email"
                  size="large"
                  style={{
                    border: "2px solid #111",
                    borderRadius: "5px",
                    backgroundColor: "#fff", // replace "your_desired_color" with the color you want
                    outline: "none",
                    color: "#111",
                    "::placeholder": {
                      color: "grey",
                      opacity: 1,
                    },
                  }}
                />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{
                    backgroundColor: "#111",
                    marginLeft: "5px",
                    height: "40px",
                    width: "100px",
                  }}
                  loading={loading}
                >
                  SUBSCRIBE
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Box>
    </Box>
  );
};

export default NewsLetterSection;
