import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import "./datadiri.css";

const Index = ({ activeStep, setActiveStep, setPersonal }) => {
   const [postData, setPostData] = useState({
      nama: "",
      alamat: "",
      email: "",
      nohp: "",
      gender: "",
      agama: "",
      norek: "",
      dateOfBirth: "",
      placeOfBirth: "",
      race: "",
   });

   const ButtonError = () => {
      if (
         !postData.nama ||
         !postData.alamat ||
         !postData.email ||
         !postData.nohp ||
         !postData.gender ||
         !postData.agama ||
         !postData.norek ||
         !postData.dateOfBirth ||
         !postData.placeOfBirth ||
         !postData.race
      ) {
         return (
            <Button variant="outlined" disabled>
               Next
            </Button>
         );
      } else {
         return (
            <Button variant="outlined" type="submit">
               Next
            </Button>
         );
      }
   };

   const onSubmit = (e) => {
      e.preventDefault();
      setPersonal(postData);
      setActiveStep((num) => num + 1);
   };

   return (
      <>
         <form className="input-data" onSubmit={onSubmit}>
            <div className="input-data">
               <div className="data-left">
                  <TextField
                     type="text"
                     required
                     name="nama"
                     variant="outlined"
                     label="Nama"
                     fullWidth
                     value={postData.nama}
                     onChange={(e) => {
                        setPostData({ ...postData, nama: e.target.value });
                     }}
                  />
                  <TextField
                     type="text"
                     required
                     name="alamat"
                     variant="outlined"
                     label="Alamat"
                     fullWidth
                     value={postData.alamat}
                     onChange={(e) => {
                        setPostData({ ...postData, alamat: e.target.value });
                     }}
                  />
                  <TextField
                     error
                     type="email"
                     required
                     name="email"
                     variant="outlined"
                     label="Email"
                     fullWidth
                     value={postData.email}
                     onChange={(e) =>
                        setPostData({ ...postData, email: e.target.value })
                     }
                  />
                  <TextField
                     type="tel"
                     required
                     name="nohp"
                     variant="outlined"
                     label="No hp"
                     fullWidth
                     value={postData.nohp}
                     onChange={(e) =>
                        setPostData({ ...postData, nohp: e.target.value })
                     }
                  />
                  <TextField
                     type="text"
                     required
                     name="gender"
                     variant="outlined"
                     label="Gender"
                     fullWidth
                     value={postData.gender}
                     onChange={(e) =>
                        setPostData({ ...postData, gender: e.target.value })
                     }
                  />
               </div>
               <div className="data-right">
                  <TextField
                     type="text"
                     required
                     name="agama"
                     variant="outlined"
                     label="agama"
                     fullWidth
                     value={postData.agama}
                     onChange={(e) =>
                        setPostData({ ...postData, agama: e.target.value })
                     }
                  />
                  <TextField
                     type="number"
                     required
                     name="norek"
                     variant="outlined"
                     label="No.Rek"
                     fullWidth
                     value={postData.norek}
                     onChange={(e) =>
                        setPostData({ ...postData, norek: e.target.value })
                     }
                  />
                  <TextField
                     type="text"
                     required
                     name="dateOfBirth"
                     variant="outlined"
                     label="Tanggal lahir"
                     fullWidth
                     value={postData.dateOfBirth}
                     onChange={(e) =>
                        setPostData({
                           ...postData,
                           dateOfBirth: e.target.value,
                        })
                     }
                  />
                  <TextField
                     type="text"
                     required
                     name="placeOfBirth"
                     variant="outlined"
                     label="Tempat lahir"
                     fullWidth
                     value={postData.placeOfBirth}
                     onChange={(e) =>
                        setPostData({
                           ...postData,
                           placeOfBirth: e.target.value,
                        })
                     }
                  />
                  <TextField
                     type="text"
                     required
                     name="race"
                     variant="outlined"
                     label="Kewarganegaraan"
                     fullWidth
                     value={postData.race}
                     onChange={(e) =>
                        setPostData({ ...postData, race: e.target.value })
                     }
                  />
               </div>
            </div>
            <div className="button-wrapper">
               <ButtonError />
            </div>
         </form>
      </>
   );
};

export default Index;
