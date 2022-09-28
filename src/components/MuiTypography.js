import React from "react";
import { Typography } from "@mui/material";

function MuiTypography() {
  return (
    <>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui blanditiis
        et deserunt, nisi aliquam natus neque dolorem sapiente eum sunt possimus
        vel ut saepe, quaerat repellat, facilis quas odio id?
      </Typography>
      <Typography variant="body2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste alias et
        numquam iusto animi eligendi voluptates reiciendis cupiditate explicabo
        reprehenderit officia esse accusantium facere, blanditiis eum amet,
        placeat tenetur labore?
      </Typography>
    </>
  );
}

export default MuiTypography;
