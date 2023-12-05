import React from "react";
import { Layout, Row, Col, Typography, Space, Divider, Button } from "antd";
import {
  FacebookOutlined,
  TwitterOutlined,
  GoogleOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  GithubOutlined,
  HomeOutlined,
  MailOutlined,
  PhoneOutlined
} from "@ant-design/icons";

const { Footer } = Layout;
const { Title, Link, Text } = Typography;

const FooterSec = () => {
  return (
    <Footer style={{ backgroundColor: "#212121", marginTop:"100px" }}>
      <Row justify="center" align="top" style={{ padding: "24px" }}>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8}>
          <img
            src="https://img.freepik.com/premium-vector/free-vector-beautiful-flying-hummingbird-design-element-banners-posters-leaflets-brochur_1009653-1.jpg"
            alt="logo"
            width={"70px"}
            style={{ borderRadius: "50%" }}
          />
          <Title level={4} style={{ color: "#fff" }}>
            CodeLoom Studios
          </Title>
          <Text style={{color:"#fff"}}>
            Here you can use rows and columns to organize your footer content.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </Text>
        </Col>
        <Col xs={24} sm={24} md={4} lg={4} xl={4} xxl={4}>
          <Title level={4} style={{ color: "#e7ded4" }}>
            Menu
          </Title>
          <Link href="/about" style={{ color: "#fff" }}>
            About
          </Link>
          <br />
          <Link href="/services" style={{ color: "#fff" }}>
            Services
          </Link>
          <br />
          <Link href="/ourProjects" style={{ color: "#fff" }}>
            Our Projects
          </Link>
          <br />
          <Link href="/pricing" style={{ color: "#fff" }}>
            Pricing
          </Link>
          <br />
          <Link href="/team" style={{ color: "#fff" }}>
            Team
          </Link>
          <br />
          <Link href="/contactUs" style={{ color: "#fff" }}>
            Contact
          </Link>
        </Col>
        <Col xs={24} sm={24} md={4} lg={4} xl={4} xxl={4}>
          <Title level={4} style={{ color: "#e7ded4" }}>
            Useful links
          </Title>
          <Link href="#" style={{ color: "#fff" }}>
            Admin Login
          </Link>
          <br />
          <Link href="#" style={{ color: "#fff" }}>
            Careers
          </Link>
          <br />
          <Link href="#" style={{ color: "#fff" }}>
            Privacy
          </Link>
          <br />
          <Link href="#" style={{ color: "#fff" }}>
            Terms
          </Link>
        </Col>
        <Col xs={24} sm={24} md={8} lg={8} xl={8} xxl={8} style={{display: "flex", flexDirection:"column"}}>
          <Title level={4} style={{ color: "#e7ded4" }}>
            Contact
          </Title>
          <Text style={{color:"#fff"}}>
            <strong>
              <span>
                <HomeOutlined style={{ marginRight: "8px"}} />
                New York, NY 10012, US
              </span>
            </strong>
          </Text>
          <br />
          <Text style={{color:"#fff"}}>
            <strong>
              <span>
                <MailOutlined style={{ marginRight: "8px" }} />
                info@example.com
              </span>
            </strong>
          </Text>
          <br />
          <Text style={{color:"#fff"}}>
            <strong>
              <span>
                <PhoneOutlined style={{ marginRight: "8px" }} />+ 01 234 567 88
              </span>
            </strong>
          </Text>
          <br />
          <Text style={{color:"#fff"}}>
            <strong>
              <span>
                <PhoneOutlined style={{ marginRight: "8px" }} />+ 01 234 567 89
              </span>
            </strong>
          </Text>
        </Col>
      </Row>
      <Divider />
      <Row justify="center" align="top">
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
        <Space>
            <Button type="link" icon={<FacebookOutlined />} style={{ color: "#fff" }} />
            <Button type="link" icon={<TwitterOutlined />} style={{ color: "#fff" }} />
            <Button type="link" icon={<GoogleOutlined />} style={{ color: "#fff" }} />
            <Button type="link" icon={<InstagramOutlined />} style={{ color: "#fff" }} />
            <Button type="link" icon={<LinkedinOutlined />} style={{ color: "#fff" }} />
            <Button type="link" icon={<GithubOutlined />} style={{ color: "#fff" }} />
        </Space>
        </Col>
      </Row>
      <Row justify="center" align="top" style={{ paddingTop: "12px" }}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} xxl={12}>
          <Text style={{color:"#fff"}}>
            © 2023 Copyright&nbsp;:&nbsp;CodeLoomStudios <br />
            <Link href="#" style={{ color: "#ccff02" }}> Privacy</Link> | <Link href="#" style={{ color: "#ccff02" }}>Terms</Link>
          </Text>
        </Col>
      </Row>
    </Footer>
  );
};

export default FooterSec;
