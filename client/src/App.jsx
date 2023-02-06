import InputHead from "./componets/InputHead"
import Table from "./componets/Table"
import { useState } from "react"

function App() {
  const [dataForms, setDataForms] = useState([])
  console.log(dataForms)


  return (
    <div className="h-screen bg-slate-600">
      <InputHead setDataForms={setDataForms}/>
      <Table dataForms={dataForms}/>
    </div>
  )
}

export default App
