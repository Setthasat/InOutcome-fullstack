import InputHead from "./componets/InputHead"
import ErrorPOP from "./componets/ErrorPOP"
import Table from "./componets/Table"
import { useState } from "react"

function App() {
  
  const [dataForms, setDataForms] = useState([])
  const [formsError, setFormsError] = useState(false)


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
