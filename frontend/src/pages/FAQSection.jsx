import React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { Typography, Box, Divider } from "@mui/material";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

//Divider styles
const DividerStyled = styled(Divider)(({ expanded }) => ({
    backgroundColor: expanded ? "grey" : "#fff",
  }));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon
        sx={{ fontSize: "0.9rem", color: props.expanded ? "#111" : "#fff" }}
      />
    }
    {...props}
  />
))(({ theme, expanded, questionId }) => ({
  backgroundColor: expanded === questionId ? "#ccff02" : "#111",
  color: expanded === questionId ? "#111" : "#fff",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

const FAQSection = () => {
  const [expanded, setExpanded] = React.useState(null);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : null);
  };

  return (
    <Box sx={{ width: "70vw", marginTop:"50px" }}>
      <Box>
        <Typography
          sx={{
            textAlign: "center",
            color: "#fff",
            fontFamily: "Syne, sans-serif",
            fontSize: "48px",
            marginBottom: "20px",
          }}
        >
          FAQs
        </Typography>
      </Box>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        sx={{ backgroundColor: "#111", color: "#fff" }}
      >
        <AccordionSummary
          aria-controls="panel1d-content"
          id="panel1d-header"
          expanded={expanded}
          questionId="panel1"
        >
          <Typography style={{ fontSize: "20px" }}>What It takes to create an image?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "left", fontSize: "16px" }}>
          All things starts with a homepage — Get inspired without breaking your wallet with premium Figma and Sketch templates. Capitalize hanging fruit to identify a ballpark value added activity to beta test. Podcasting operational — change management inside of workflows and operations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <DividerStyled expanded={expanded === "panel1"} />
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        sx={{ backgroundColor: "#111", color: "#fff" }}
      >
        <AccordionSummary
          aria-controls="panel2d-content"
          id="panel2d-header"
          expanded={expanded}
          questionId="panel2"
        >
          <Typography style={{ fontSize: "20px" }}>What's the standard image size?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "left", fontSize: "16px" }}>
          All things starts with a homepage — Get inspired without breaking your wallet with premium Figma and Sketch templates. Capitalize hanging fruit to identify a ballpark value added activity to beta test. Podcasting operational — change management inside of workflows and operations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <DividerStyled expanded={expanded === "panel2"} />
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        sx={{ backgroundColor: "#111", color: "#fff" }}
      >
        <AccordionSummary
          aria-controls="panel3d-content"
          id="panel3d-header"
          expanded={expanded}
          questionId="panel3"
        >
          <Typography style={{ fontSize: "20px" }}>Payment methods</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "left", fontSize: "16px" }}>
          All things starts with a homepage — Get inspired without breaking your wallet with premium Figma and Sketch templates. Capitalize hanging fruit to identify a ballpark value added activity to beta test. Podcasting operational — change management inside of workflows and operations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <DividerStyled expanded={expanded === "panel3"} />
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
        sx={{ backgroundColor: "#111", color: "#fff" }}
      >
        <AccordionSummary
          aria-controls="panel4d-content"
          id="panel4d-header"
          expanded={expanded}
          questionId="panel4"
        >
          <Typography style={{ fontSize: "20px" }}>Help and support</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "left", fontSize: "16px" }}>
          All things starts with a homepage — Get inspired without breaking your wallet with premium Figma and Sketch templates. Capitalize hanging fruit to identify a ballpark value added activity to beta test. Podcasting operational — change management inside of workflows and operations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <DividerStyled expanded={expanded === "panel4"} />
      <Accordion
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
        sx={{ backgroundColor: "#111", color: "#fff" }}
      >
        <AccordionSummary
          aria-controls="panel5d-content"
          id="panel5d-header"
          expanded={expanded}
          questionId="panel5"
        >
          <Typography style={{ fontSize: "20px" }}>Can I create multiple images at once?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography style={{ textAlign: "left", fontSize: "16px" }}>
          All things starts with a homepage — Get inspired without breaking your wallet with premium Figma and Sketch templates. Capitalize hanging fruit to identify a ballpark value added activity to beta test. Podcasting operational — change management inside of workflows and operations.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <DividerStyled expanded={expanded === "panel5"} />
    </Box>
  );
};

export default FAQSection;
