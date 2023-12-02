// WordsGallery.js

import React from "react";
import Paper from "@mui/material/Paper";
import { makeStyles } from "@mui/styles";
import "./css/WordsGallery.css";

const useStyles = makeStyles((theme) => ({
  paper: {
    fontFamily: "inter, sans-serif", // Font
    padding: theme.spacing(1),
    margin: theme.spacing(1),
    display: "inline-block",
    border: `1px solid #fff`, // Border color and thickness

    "&:hover": {
      transform: "scale(1.1)", // Scale up on hover
    },
  },
}));

const WordsGallery = ({ words }) => {
  const classes = useStyles();

  return (
    <div className="container">
      {words.map((word, index) => (
        <Paper
          key={index}
          className={classes.paper}
          sx={{
            backgroundColor: "transparent",
            color: "#fff",
            transition: "transform 0.2s",
            fontWeight: 500,
            cursor: "default",
          }}
          elevation={3}
        >
          {word}
        </Paper>
      ))}
    </div>
  );
};

export default WordsGallery;
