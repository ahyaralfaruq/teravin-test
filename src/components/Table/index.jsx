import React from "react";
import {
   Button,
   Table,
   TableHead,
   TableRow,
   TableCell,
   TableBody,
} from "@mui/material";
import { RemoveRedEye } from "@mui/icons-material";

const index = () => {
   return (
      <Table>
         <TableHead>
            <TableRow style={{ background: "#eee" }}>
               <TableCell>ID No.</TableCell>
               <TableCell>Nama</TableCell>
               <TableCell>Alamat</TableCell>
               <TableCell>Detail</TableCell>
            </TableRow>
         </TableHead>
         <TableBody>
            <TableRow>
               <TableCell>1</TableCell>
               <TableCell>Muhammad Ahyar</TableCell>
               <TableCell>Jl.Sadar</TableCell>
               <TableCell>
                  <Button style={{ color: "#dbdbdb" }}>
                     <RemoveRedEye />
                  </Button>
               </TableCell>
            </TableRow>
         </TableBody>
      </Table>
   );
};

export default index;
