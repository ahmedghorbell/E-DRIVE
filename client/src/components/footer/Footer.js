import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function SocialIcons() {
  return (
    <div

    >
      <IconButton sx={{ color: "#ebffff" }}>
        <GitHubIcon />
      </IconButton>
      <IconButton sx={{ color: "#ebffff" }}>
        <LinkedInIcon />
      </IconButton>
      <IconButton sx={{ color: "#ebffff" }}>
        <EmailIcon />
      </IconButton>
    </div>
  );
}

function ContactInfo() {
  return (
    <Typography variant="body2" color="#ebffff" style={{ marginTop: "10px", fontSize:"16px", fontFamily: "Verdana" }}>
      {"Contact us: "}
      <Link color="inherit" href="mailto:contact@example.com">
        e-drive@gmail.com
      </Link>
    </Typography>
  );
}

function Copyright() {
  return (
    <Typography variant="body2" style={{ color: "#ebffff", marginTop: "10px", fontFamily: "Verdana"  }}>
      {"© "}
      {new Date().getFullYear()}
      {" E-Drive. All rights reserved."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      style={{
        backgroundColor: "#192734",
        padding: "15px ",
        marginTop:"20px"
      }}
    >
      <CssBaseline />
      <Box
        component="footer"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="md" style={{ textAlign: "center" }}>
          <img
            style={{ width: 200, height: 50 }}
            src="https://res.cloudinary.com/dzw5kfcko/image/upload/v1685816397/logo-no-background_yyqe1l.png"
            alt="logo"
          />
          <Typography
            variant="body1"
            style={{
              color: "#ebffff",
              fontSize: "18px",
              marginTop: "5px",
              fontFamily: "Verdana",
            }}
          >
            Revolutionizing how we move with electric vehicles
          </Typography>
          <ContactInfo />
          <SocialIcons />
          <Typography variant="body2" style={{ color: "#ebffff", marginTop: "5px", fontFamily: "Verdana" }}>
            <Link color="inherit" href="/privacypolicy">
              Privacy Policy
            </Link>{" "}
            |{" "}
            <Link color="inherit" href="/termsandconditions">
              Terms and Conditions
            </Link>
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}

