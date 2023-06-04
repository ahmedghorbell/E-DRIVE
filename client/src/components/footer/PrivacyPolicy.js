import React from "react";
import { Container, Typography } from "@mui/material";



const PrivacyPolicy = () => {


  return (
    <Container maxWidth="md" style={{ marginTop: "8rem", fontFamily: "Verdana" }}>
      <Typography variant="h4" gutterBottom>
        Privacy Policy
      </Typography>
      <Typography variant="body1" gutterBottom>
        At our company, we take your privacy seriously. This privacy policy
        describes how we collect and use personal information about you when
        you use our website.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Information we collect
      </Typography>
      <Typography variant="body1" gutterBottom>
        We collect personal information about you when you register for an
        account, make a purchase, sign up for our newsletter, or fill out a
        contact form. This information may include your name, email address,
        phone number, and billing information.
      </Typography>
      <Typography variant="h6" gutterBottom>
        How we use your information
      </Typography>
      <Typography variant="body1" gutterBottom>
        We use your information to provide and improve our services, to
        communicate with you, to process payments, and to personalize your
        experience on our website. We may also use your information for
        marketing purposes, such as sending you promotional emails or
        newsletters.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Information sharing and disclosure
      </Typography>
      <Typography variant="body1" gutterBottom>
        We may share your personal information with third-party service
        providers who assist us in operating our website, processing payments,
        or providing other services. We may also disclose your information in
        response to a subpoena, court order, or other legal request.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Data retention
      </Typography>
      <Typography variant="body1" gutterBottom>
        We retain your personal information for as long as necessary to provide
        our services and fulfill the purposes outlined in this privacy policy.
        After that, we may retain information for a period of time to comply
        with legal obligations, resolve disputes, or enforce agreements.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Your rights
      </Typography>
      <Typography variant="body1" gutterBottom>
        You have the right to access, correct, and delete your personal
        information. You may also have the right to restrict our use of your
        information and to receive your information in a portable format. To
        exercise these rights, please contact us using the information provided
        below.
      </Typography>
      <Typography variant="h6" gutterBottom>
        Contact us
      </Typography>
      <Typography variant="body1" gutterBottom>
        If you have any questions or concerns about this privacy policy, please
        contact us at info@ourcompany.com.
      </Typography>
      </Container>
  );
};

export default PrivacyPolicy;
