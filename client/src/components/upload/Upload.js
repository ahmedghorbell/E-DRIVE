import { Button } from "@mui/material";
import React, { useEffect, useRef } from "react";

const Upload = ({ onUploadSuccess }) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dzw5kfcko",
        uploadPreset: "EDRIVE",
      },
      function (error, result) {
        if (!error && result && result.event === "success") {
          const imageUrl = result.info.secure_url;
          onUploadSuccess(imageUrl);
        }
      }
    );
  }, [onUploadSuccess]);

  return (
    <div>
      <Button variant="outlined" color="inherit" fullWidth onClick={() => widgetRef.current.open()}> Add image </Button>
    </div>
  );
};

export default Upload;


