import InputHead from "./componets/InputHead";
import ErrorPOP from "./componets/ErrorPOP";
import Table from "./componets/Table";
import { useState, useEffect } from "react";
import Hamburger from "./componets/Hamburger";
import { PacmanLoader } from 'react-spinners';
import { motion } from "framer-motion";

import axios from 'axios';

function App() {

  const [dataForms, setDataForms] = useState([]);
  const [wave, setWave] = useState(`${Math.floor(Math.random() * 9) + 1}`);
  const [formsError, setFormsError] = useState(false);
  const [error, setError] = useState(false);
  const [hamClose, setHamClose] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    try {
      const api = await axios.get('http://localhost:8888/');
      console.log(api.data);
      setDataForms(api.data.data);
      // setLoading(false);
    } catch {
      setError(true);
    };
  };

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    console.log(dataForms);
  }, [dataForms]);

  if (loading) {
    return (
      <div className="w-screen h-screen">
        <div className="bg-[#006abc] h-screen w-screen flex justify-center items-center">
          <div className="duration-[1400ms] sm:pl-10 absolute">
            <PacmanLoader color="yellow" size={75} />
          </div>
          <div className="felx justify-center items-center mt-[25rem]">
            <p className="sm:text-[7.5rem] text-[3rem] relative text-white font-sans sm:pl-[10rem]">Loading . . .</p>
          </div>
        </div>
      </div>
    );
  }

  if (dataForms) {
    return (
      <div className="bg-[#0098f1] h-screen ">
        <div className="bg-[#006abc]">
          <Hamburger setWave={setWave} wave={wave} hamClose={hamClose} setHamClose={setHamClose} />
          <InputHead setDataForms={setDataForms} setFormsError={setFormsError} />
        </div>
        <Table dataForms={dataForms} setDataForms={setDataForms} wave={wave} />
        {formsError || error === true ? (
          <ErrorPOP setFormsError={setFormsError} formsError={formsError} error={error} />
        ) : (
          <></>
        )}
      </div>
    );
  }
};

export default App;
