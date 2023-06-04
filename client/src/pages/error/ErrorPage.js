import React from "react";
import { Typography, Button } from "@mui/material";

const styles = {
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  },
  errorText: {
    fontWeight: "bold",
    marginBottom: "8px",
    fontFamily: "Verdana",
  },
  button: {
    marginTop: "16px",
    backgroundColor: "#1976d2",
    color: "#fff",
  },
};

const ErrorPage = () => {
  return (
    <div style={styles.root}>
      <Typography variant="h1" style={styles.errorText}>
        Oops!
      </Typography>
      <Typography variant="h4">Something went wrong.</Typography>
      <Button
        variant="contained"
        color="secondary"
        style={styles.button}
        onClick={() => window.location.reload()}
      >
        Refresh Page
      </Button>
    </div>
  );
};

export default ErrorPage;
