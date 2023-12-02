import React, { useState } from "react";
import { Col, Row, Form, Input, Button, message } from "antd";
import axios from "axios";
import { Box, Typography } from "@mui/material";

const NewsLetterSection = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values) => {
    try {
      setLoading(true);
      // Replace the URL with your actual API endpoint
      await axios.post("YOUR_API_ENDPOINT", values);
      message.success("Subscription successful!");
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
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 0 }} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
          <Col xs={24} sm={24} md={12} lg={12} style={{justifyContent:"center", alignItems:"center"}}>
            <Typography variant="h4" color="#111" style={{marginTop:"15px", fontFamily:"Syne, sans-serif"}}>
              Subscribe For The Updates
            </Typography>
          </Col>
          <Col xs={24} sm={24} md={12} lg={12}>
            <Form onFinish={handleSubmit} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Please input your email!",
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
                        backgroundColor: "#your_desired_color", // replace "your_desired_color" with the color you want
                        outline: "none",
                        color: "#111",
                        '::placeholder': {
                            color: 'grey',
                            opacity: 1
                        }
                    }}
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" style={{backgroundColor:"#111", marginLeft:"5px", height:"40px", width:"100px"}} loading={loading}>
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
