import React, { useState } from 'react';
import { TextField, Button, Typography, Grid } from '@mui/material';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
  };

  const formContainerStyle = {
    width: '100%',
    maxWidth: 400,
    margin: '0 auto',
  };

  const submitButtonStyle = {
    marginTop: '16px',
  };

  return (
    <form style={formContainerStyle} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6" align="center">Contact Us</Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="name"
            label="Name"
            fullWidth
            value={formData.name}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            label="Email"
            fullWidth
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="subject"
            label="Subject"
            fullWidth
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="message"
            label="Message"
            multiline
            rows={4}
            fullWidth
            value={formData.message}
            onChange={handleChange}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={submitButtonStyle}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactUs;
