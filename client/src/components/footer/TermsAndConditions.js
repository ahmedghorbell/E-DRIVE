import React from "react";
import { Container, Typography } from "@mui/material";

const TermsAndConditions = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: "8rem", fontFamily: "Verdana" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Terms and Conditions
      </Typography>

      <Typography variant="subtitle1" gutterBottom>
        Welcome to E-DRIVE, the online e-commerce website that provides a
        platform for you to purchase high-quality products. By accessing or
        using our website, you agree to comply with these Terms and Conditions.
      </Typography>

      <Typography variant="h6" gutterBottom>
        1. Acceptance of Terms
      </Typography>

      <Typography variant="body1" gutterBottom>
        By accessing or using our website, you acknowledge that you have read,
        understood, and agree to be bound by these Terms and Conditions. If you
        do not agree to these Terms and Conditions, you should not use our
        website.
      </Typography>

      <Typography variant="h6" gutterBottom>
        2. Use of Website
      </Typography>

      <Typography variant="body1" gutterBottom>
        You may use our website for lawful purposes and in accordance with these
        Terms and Conditions. You may not use our website in any way that could
        damage, disable, overburden, or impair our servers or networks, or
        interfere with any other party's use and enjoyment of our website.
      </Typography>

      <Typography variant="h6" gutterBottom>
        3. Products and Pricing
      </Typography>

      <Typography variant="body1" gutterBottom>
        We offer a wide range of products on our website, and we strive to
        provide accurate and up-to-date product information, including
        descriptions, prices, and availability. However, we cannot guarantee
        that all product information is complete, accurate, or current. Prices
        are subject to change without notice.
      </Typography>

      <Typography variant="h6" gutterBottom>
        4. Orders and Payments
      </Typography>

      <Typography variant="body1" gutterBottom>
        When you place an order on our website, you are making an offer to
        purchase the products listed in your order. We reserve the right to
        accept or reject any order, and we may limit the quantities of any
        product that we sell. Payment must be made at the time of order
        placement, and we accept various forms of payment, including credit
        cards and PayPal.
      </Typography>

      <Typography variant="h6" gutterBottom>
        5. Shipping and Delivery
      </Typography>

      <Typography variant="body1" gutterBottom>
        We offer shipping to various locations, subject to shipping restrictions
        and limitations. We strive to deliver products within a reasonable time
        frame, but we cannot guarantee delivery dates or times. We are not
        responsible for any delays, damages, or losses that may occur during
        shipping.
      </Typography>

      <Typography variant="h6" gutterBottom>
        6. Returns and Refunds
      </Typography>

      <Typography variant="body1" gutterBottom>
        We want you to be satisfied with your purchases from E-DRIVE. If for any
        reason you are not satisfied with your purchase, you may return it to us
        for a refund or exchange, subject to our Return Policy. We reserve the
        right to refuse any returns or exchanges that do not comply with our
        policy.
      </Typography>
      <Typography variant="h6" gutterBottom>
        7. Privacy Policy
      </Typography>

      <Typography variant="body1" gutterBottom>
        We take your privacy seriously, and we have a Privacy Policy that
        explains how we collect, use, and protect your personal information. By
        using our website, you agree to our Privacy Policy.
      </Typography>
      <Typography variant="h6" gutterBottom>
        8. Changes to Terms and Conditions
      </Typography>

      <Typography variant="body1" gutterBottom>
        We reserve the right to modify or update these Terms and Conditions at
        any time, without prior notice. Your continued use of our website after
        any such changes constitutes your acceptance of the
      </Typography>
    </Container>
  );
};

export default TermsAndConditions;
