import React from "react";
import { Typography } from "@mui/material";
import { Form } from "../../components";

const FormSubmission = ({ addPeserta }) => {
   return (
      <div>
         <Typography variant="body1" gutterBottom>
            Form Submission
         </Typography>
         <Form addPeserta={addPeserta} />
      </div>
   );
};

export default FormSubmission;
