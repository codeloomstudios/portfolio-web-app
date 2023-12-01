import React from "react";
import { Card, Col, Row, Divider } from "antd";
import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";

const CounterUp = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "100px",
      }}
    >
      <Row
        className="counter-up"
        align="middle"
        gutter={[16, 16]}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Col className="counter-item">
          <Card>
            <CountUp end={100} suffix="+" style={{ fontSize: "40px" }} />{" "}
            {/* Increase the font size using the style prop */}
            <Typography style={{ fontSize: "16px" }}>
              Projects Completed
            </Typography>
          </Card>
        </Col>
        <Col className="counter-item">
          <Card>
            <CountUp end={75} suffix="+" style={{ fontSize: "40px" }} />{" "}
            {/* Increase the font size using the style prop */}
            <Typography style={{ fontSize: "16px" }}>Happy Clients</Typography>
          </Card>
        </Col>
        <Col className="counter-item">
          <Card>
            <CountUp end={150} suffix="%" style={{ fontSize: "40px" }} />{" "}
            {/* Increase the font size using the style prop */}
            <Typography style={{ fontSize: "16px" }}>
              Growth Every Month
            </Typography>
          </Card>
        </Col>
        <Col className="counter-item">
          <Card>
            <CountUp end={25} suffix="+" style={{ fontSize: "40px" }} />{" "}
            {/* Increase the font size using the style prop */}
            <Typography style={{ fontSize: "16px" }}>Team Members</Typography>
          </Card>
        </Col>
      </Row>
    </Box>
  );
};

export default CounterUp;
