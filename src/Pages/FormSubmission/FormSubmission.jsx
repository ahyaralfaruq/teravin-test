import React, { useState, useEffect } from "react";
import { Typography, Step, StepLabel, Stepper } from "@mui/material";

import {
   DataDiri,
   RiwayatPendidikan,
   PengalamanKerja,
   Keahlian,
} from "../../components/Form";

import "./formSubmission.css";

const FormSubmission = ({ addPeserta }) => {
   const [postData, setPostData] = useState({
      // id: "",
      // personal: {
      //    nama: "",
      //    alamat: "",
      //    email: "",
      //    nohp: "",
      //    gender: "",
      //    agama: "",
      //    norek: "",
      //    dateOfBirth: "",
      //    placeOfBirth: "",
      //    race: "",
      // },
      // riwayatPendidikan: [
      //    // {
      //    //    id: 0,
      //    //    namaSekolah: "",
      //    //    jurusan: "",
      //    //    dari: "",
      //    //    sampai: "",
      //    //    keterangan: "",
      //    // },
      // ],
      // pengalamanKerja: [
      //    // {
      //    //    id: 0,
      //    //    namaPerusahaan: "",
      //    //    jenisIndustri: "",
      //    //    jabatanAwal: "",
      //    //    jabatanAkhir: "",
      //    //    NamaAtasan: "",
      //    // },
      // ],
      // keahlian: "",
   });

   useEffect(() => {
      setPostData();
   }, [postData]);

   const setPersonal = (data) => {
      setPostData((current) => ({
         ...current,
         personal: data,
      }));
   };

   const setRiwayatPendidikan = (data) => {
      setPostData((current) => ({
         ...current,
         riwayatPendidikan: [...current.riwayatPendidikan, data],
      }));
   };

   console.log(postData);

   const [activeStep, setActiveStep] = useState(0);

   const steps = [
      "Data diri",
      "Riwayat pendidikan",
      "Pengalaman kerja",
      "Keahlian",
   ];

   const FormInput = () => {
      return activeStep === 0 ? (
         <DataDiri
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            steps={steps}
            setPersonal={setPersonal}
         />
      ) : activeStep === 1 ? (
         <RiwayatPendidikan postData={postData} setPostData={setPostData} />
      ) : activeStep === 2 ? (
         <PengalamanKerja postData={postData} setPostData={setPostData} />
      ) : (
         <Keahlian postData={postData} setPostData={setPostData} />
      );
   };

   return (
      <div>
         <Typography variant="body1" gutterBottom>
            Form Submission
         </Typography>

         <div className="form-wrapper">
            <Stepper activeStep={activeStep} alternativeLabel>
               {steps.map((step) => (
                  <Step key={step}>
                     <StepLabel>{step}</StepLabel>
                  </Step>
               ))}
            </Stepper>

            <div className="form">
               <div className="input-wrapper">
                  <FormInput />
               </div>
            </div>
         </div>
      </div>
   );
};

export default FormSubmission;
