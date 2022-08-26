import { useState } from "react";
import { Button, Step, StepLabel, Stepper } from "@mui/material";
import Datadiri from "./forms/Datadiri";
import RiwayatPendidikan from "./forms/RiwayatPendidikan";
import PengalamanKerja from "./forms/PengalamanKerja";
import Keahlian from "./forms/Keahlian";

import "./form.css";

const Index = ({ addPeserta }) => {
   const [postData, setPostData] = useState({
      id: 0,
      personal: {
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
      },
      riwayatPendidikan: [
         // {
         //    id: 0,
         //    namaSekolah: "",
         //    jurusan: "",
         //    dari: "",
         //    sampai: "",
         //    keterangan: "",
         // },
      ],
      pengalamanKerja: [
         // {
         //    id: 0,
         //    namaPerusahaan: "",
         //    jenisIndustri: "",
         //    jabatanAwal: "",
         //    jabatanAkhir: "",
         //    NamaAtasan: "",
         // },
      ],
      keahlian: "",
   });

   const [activeStep, setActiveStep] = useState(0);

   const steps = [
      "Data diri",
      "Riwayat pendidikan",
      "Pengalaman kerja",
      "Keahlian",
   ];

   const onNext = () => {
      setActiveStep((num) => num + 1);
   };

   const onSubmit = () => {
      console.log("first");
   };

   const FormInput = () => {
      return activeStep === 0 ? (
         <Datadiri postData={postData} setPostData={setPostData} />
      ) : activeStep === 1 ? (
         <RiwayatPendidikan postData={postData} setPostData={setPostData} />
      ) : activeStep === 2 ? (
         <PengalamanKerja postData={postData} setPostData={setPostData} />
      ) : (
         <Keahlian postData={postData} setPostData={setPostData} />
      );
   };

   return (
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

            <div className="button-wrapper">
               {activeStep === steps.length - 1 ? (
                  <Button onClick={onSubmit}>Submit</Button>
               ) : (
                  <Button onClick={onNext}>Next</Button>
               )}
            </div>
         </div>
      </div>
   );
};

export default Index;
