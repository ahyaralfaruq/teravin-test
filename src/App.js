import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { FormSubmission, Home } from "./Pages";
import "./App.css";

const LOCAL_STORAGE_KEY = "peserta";

function App() {
   const [state, setState] = useState([]);

   const addPeserta = (peserta) => {
      setState([peserta, ...state]);
   };

   useEffect(() => {
      const daftarPeserta = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
      if (daftarPeserta) {
         setState(daftarPeserta);
      }
   }, []);

   useEffect(() => {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state));
   }, [state]);

   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Home addPeserta={addPeserta} />} />
            <Route
               path="/form"
               element={<FormSubmission setPeserta={setState} />}
            />
         </Routes>
      </div>
   );
}

export default App;
