import React from "react";
import { TextField } from "@mui/material";
import "./datadiri.css";

const Datadiri = ({ postData, setPostData }) => {
   let cek = { ...postData };

   console.log(cek);

   return (
      <div className="input-data">
         <div className="data-left">
            <TextField
               required
               name="nama"
               variant="outlined"
               label="Nama"
               fullWidth
               value={postData.personal.nama}
               onChange={(e) =>
                  setPostData({ ...postData, nama: e.target.value })
               }
            />
            <TextField
               required
               name="alamat"
               variant="outlined"
               label="Alamat"
               fullWidth
               value={postData.alamat}
               onChange={(e) =>
                  setPostData({ ...postData, alamat: e.target.value })
               }
            />
            <TextField
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
               required
               name="dateOfBirth"
               variant="outlined"
               label="Tanggal lahir"
               fullWidth
               value={postData.dateOfBirth}
               onChange={(e) =>
                  setPostData({ ...postData, dateOfBirth: e.target.value })
               }
            />
            <TextField
               required
               name="placeOfBirth"
               variant="outlined"
               label="Tempat lahir"
               fullWidth
               value={postData.placeOfBirth}
               onChange={(e) =>
                  setPostData({ ...postData, placeOfBirth: e.target.value })
               }
            />
            <TextField
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
   );
};

export default Datadiri;
