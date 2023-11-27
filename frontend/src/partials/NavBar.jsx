import React, { useState } from "react";
import { Stack, Paper, Box } from "@mui/material";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [isHovered, setHovered] = useState(false);

  const linkStyle = {
    color: isHovered ? "#ccff02" : "#fff",
    textDecoration: "none",
    transition: "color 0.3s",
  };

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#111111",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      {/* Logo Link Button */}
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img
          src="https://img.freepik.com/premium-vector/free-vector-beautiful-flying-hummingbird-design-element-banners-posters-leaflets-brochur_1009653-1.jpg"
          alt="logo"
          height={45}
          style={{ borderRadius: "50%" }}
        />
      </Link>
      {/* Navigate Elements */}
      <Box>
        <Paper
          style={{
            backgroundColor: "transparent",
            fontFamily: "Arial, Helvetica, sans-serif",
            fontWeight: "bold",
          }}
        >
          <Link
            to="/"
            style={linkStyle}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            Home
          </Link>
        </Paper>
      </Box>
    </Stack>
  );
};

export default NavBar;
