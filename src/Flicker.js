import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { useState, useEffect } from "react";

export default function Flicker() {
  const [color1, setColor1] = useState("black");
  const [color2, setColor2] = useState("black");
  const [color3, setColor3] = useState("black");
  const [color4, setColor4] = useState("black");
  useEffect(() => {
    const interval1 = setInterval(() => {
      if (color1 == "black") {
        setColor1("white");
      } else {
        setColor1("black");
      }
      clearInterval(interval1);
    }, 1000 / 4);
    const interval2 = setInterval(() => {
      if (color2 == "black") {
        setColor2("white");
      } else {
        setColor2("black");
      }
      clearInterval(interval2);
    }, 1000 / 6);
    const interval3 = setInterval(() => {
      if (color3 == "black") {
        setColor3("white");
      } else {
        setColor3("black");
      }
      clearInterval(interval3);
    }, 1000 / 8);
    const interval4 = setInterval(() => {
      if (color4 == "black") {
        setColor4("white");
      } else {
        setColor4("black");
      }
      clearInterval(interval4);
    }, 1000 / 12);
  });
  return (
    <Paper
      style={{
        background: "black",
        height: "821px",
      }}
    >
      <Box
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Grid
          container
          rowSpacing={20}
          columnSpacing={{ xs: 1, sm: 2, md: 20 }}
        >
          <Grid item xs={6}>
            <Box
              sx={{
                width: 300,
                height: 300,
                backgroundColor: color1,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                width: 300,
                height: 300,
                backgroundColor: color2,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                width: 300,
                height: 300,
                backgroundColor: color3,
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <Box
              sx={{
                width: 300,
                height: 300,
                backgroundColor: color4,
              }}
            />
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
