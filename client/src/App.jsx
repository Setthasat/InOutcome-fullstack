import InputHead from "./componets/InputHead"
import ErrorPOP from "./componets/ErrorPOP"
import Table from "./componets/Table"
import { useState, useEffect } from "react"

function App() {
  
  const [dataForms, setDataForms] = useState([])
  const [formsError, setFormsError] = useState(false)
  const [prevIndex, setPrevIndex] = useState(0)
  const [indexArray, setIndexArray] = useState(4)


  return (
    <div className="h-screen bg-slate-600">
      <InputHead setDataForms={setDataForms} setFormsError={setFormsError}  />
      <Table dataForms={dataForms} setDataForms={setDataForms}/>
      { formsError === true ? (
          <ErrorPOP setFormsError={setFormsError} />
        ) : (
          <></>
        )}
    </div>
  )
}

export default App
