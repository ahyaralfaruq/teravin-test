import React from "react";
import { Link } from "react-router-dom";
import { Typography, Button } from "@mui/material";

import { Table as Tabel } from "../../components";

const Home = () => {
   return (
      <div className="home">
         <Typography variant="h4" gutterBottom>
            Teravin Test React.js
         </Typography>

         <Button component={Link} to="/form" variant="outlined" size="small">
            + Add data
         </Button>

         <Tabel />
      </div>
   );
};

export default Home;
