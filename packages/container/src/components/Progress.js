import React from "react";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";

export default () => {
  return (
    <Box
      sx={{
        width: "100%",
        "& > * + *": {
          marginTop: (theme) => theme.spacing(2),
        },
      }}
    >
      <LinearProgress />
    </Box>
  );
};
