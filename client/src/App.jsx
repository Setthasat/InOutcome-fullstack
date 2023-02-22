import InputHead from "./componets/InputHead"
import ErrorPOP from "./componets/ErrorPOP"
import Table from "./componets/Table"
import HeaderWave from "./componets/HeaderWave"
import { useState, useEffect } from "react"

function App() {
  
  const [dataForms, setDataForms] = useState([])
  const [wave, setWave] = useState(`${Math.floor(Math.random() * 4) + 1}`)
  const [formsError, setFormsError] = useState(false)

  console.log(wave);

  return (
    <div className="bg-[#0098f1] h-screen">
      <div className="bg-[#006abc]">
        <HeaderWave setWave={setWave} wave={wave}/>
        <InputHead setDataForms={setDataForms} setFormsError={setFormsError}  />
      </div>
      <Table dataForms={dataForms} setDataForms={setDataForms} wave={wave}/>
      { formsError === true ? (
          <ErrorPOP setFormsError={setFormsError} />
        ) : (
          <></>
        )}
    </div>
  )
}

export default App
