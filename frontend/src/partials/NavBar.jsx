import React, { useState, useEffect } from "react";
import { Stack, Paper, Box, IconButton, Drawer, Divider } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link, useLocation } from "react-router-dom";
import "./css/NavBar.css"; // Import the CSS file

const NavBar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 760);
  const location = useLocation();

  const links = [
    { label: "Home", to: "/", id: "home" },
    { label: "About", to: "/about", id: "about" },
    { label: "Services", to: "/services", id: "services" },
    { label: "Our Projects", to: "/ourProjects", id: "ourProjects" },
    { label: "Request", to: "/request", id: "request" },
    { label: "Team", to: "/team", id: "team" },
    { label: "Contact", to: "/contactUs", id: "contactUs" },
  ];

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleResize = () => {
    setIsMobileView(window.innerWidth <= 760);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const currentPath = location.pathname;

    // Toggle active class for desktop links
    document.querySelectorAll(".desktop-links a").forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === currentPath
      );
    });

    // Toggle active class for mobile links
    document.querySelectorAll(".mobile-menu a").forEach((link) => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === currentPath
      );
    });

    if (!isMobileView && mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  }, [location.pathname, isMobileView, mobileMenuOpen]);

  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      className="navbar" 
      backgroundColor="transparent"
    >
      {/* Mobile Menu Icon */}
      {isMobileView && (
        <IconButton sx={{ color: "#fff" }} onClick={toggleMobileMenu}>
          <MenuIcon />
        </IconButton>
      )}

      {/* Logo Link Button */}
      <Link to="/" className="logo">
        {/* Apply the logo class */}
        <img
          src="https://img.freepik.com/premium-vector/free-vector-beautiful-flying-hummingbird-design-element-banners-posters-leaflets-brochur_1009653-1.jpg"
          alt="logo"
        />
      </Link>

      {/* Navigate Elements */}
      <Box
        className={isMobileView ? "mobile-links" : "desktop-links"}
        sx={{ display: { xs: "none", sm: isMobileView ? "none" : "flex" } }}
      >
        {links.map((link) => (
          <Paper
            key={link.id}
            className="Paper"
            style={{ backgroundColor: "transparent" }}
          >
            <Link to={link.to}>{link.label}</Link>
          </Paper>
        ))}
      </Box>

      {/* Mobile Menu */}
      {isMobileView && (
        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        >
          <Box className="mobile-menu">
            <IconButton
              sx={{ color: "#fff", marginBottom: "1rem" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <CloseIcon />
            </IconButton>
            {links.map((link) => (
              <Link
                className="mobileLink"
                key={link.id}
                to={link.to}
                onClick={() => {
                  setMobileMenuOpen(false);
                }}
                style={{border:"none"}}
              >
                <Paper
                  className="mobilePaper"
                  style={{
                    backgroundColor: "transparent",
                    color: location.pathname === link.to ? "#ccff02" : "#fff",
                    padding: "15px 0px 15px 0px",
                    border:"none"
                  }}
                >
                  {link.label}
                </Paper>
              </Link>
            ))}
          </Box>
        </Drawer>
      )}
    </Stack>
  );
};

export default NavBar;
