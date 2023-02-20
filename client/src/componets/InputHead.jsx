import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { GetDate } from '../utils/main'


const buttonIncomeOutComeStateUp = (color) => {
  return `border-b-[12px] hover:border-4 hover:bg-white border-b-gray-300 duration-500 w-[8rem] min-w-full h-[4rem] ${color} bg-white rounded-lg font-bold italic`
}

const buttonIncomeOutComeStateDown = (color) => {
  return `border-4 min-w-full h-[4rem] bg-white rounded-lg bg-white shadow-lg ${color} font-bold italic`
}

function InputHead({ setDataForms, setFormsError }) {


  const [buttonOnToggle, setButtonOnToggle] = React.useState({
    inCome: false,
    outCome: false
  })

  const [forms, setFroms] = React.useState(
    {
      id: uuidv4(),
      title: "",
      cost: "",
      InOrOut: "",
      date: ""
    }
  )


  const onChangeInput = (event) => {
    const { name, value } = event.target
    // if (name === "cost") {
    //   console.log("hi")
    // }
    setFroms(prev => ({
      ...prev,
      [name]: value
    }));
  }

  const handleIncome = (event) => {
    event.preventDefault();

    setFroms(prev => ({
      ...prev,
      InOrOut: "income"
    }))

    if (buttonOnToggle.outCome === true) {
      setButtonOnToggle(() => ({
        outCome: false,
        inCome: true
      }));
      return
    }

    setButtonOnToggle(prev => ({
      ...prev,
      inCome: !prev.inCome,
    }));
    return
  }

  const handleOutcome = (event) => {
    event.preventDefault();

    setFroms(prev => ({
      ...prev,
      InOrOut: "outcome"
    }))

    if (buttonOnToggle.inCome === true) {
      setButtonOnToggle(() => ({
        outCome: true,
        inCome: false
      }));
      return
    }

    setButtonOnToggle(prev => ({
      ...prev,
      outCome: !prev.outCome
    }));
    return

  }

  const handleValidateInput = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }


  const handleSubmitForm = (event) => {
    event.preventDefault();

    let { cost, title, InOrOut, date, id } = forms;

    if (typeof cost !== "number") {
      cost = parseInt(cost);
    }

    if (!date) {
      date = GetDate()
    }

    if (!title || !InOrOut || !cost) {
      setFormsError(true)
      return
    }

    console.log(forms)

    setDataForms(prev => [...prev, {
      cost: cost,
      title: title,
      InOrOut: InOrOut,
      date: date,
      id : id
    }])

    setButtonOnToggle(() => ({
      inCome: false,
      outCome: false
    }))

    setFroms(() => ({
      id: uuidv4(),
      title: "",
      cost: "",
      InOrOut: "",
      date: ""
    }))

    setFormsError(false)

  }

  return (
    <div className="flex justify-center items-center h-[40rem]">
      <div className='gird md:grid-cols-3 grid-cols-2 gap-4 md:w-[48em] w-[20rem]'>
        <div className='h-[4rem] mb-2  md:hidden '>
          <label>
            <input type="date" name='date' value={forms.date} onChange={onChangeInput} className="px-2 rounded-sm h-[4rem] min-w-full shadow-2xl focus:outline-none" />
          </label>
        </div>
        <div className='flex gap-4'>
          <div className='w-[12rem] h-[4rem] flex justify-center items-center'>
            <div className='h-[4rem] md:w-[12rem] w-[9.5rem]  flex justify-center items-center'>
              <button
                className={buttonOnToggle.inCome ? buttonIncomeOutComeStateDown('shadow-green-500') : buttonIncomeOutComeStateUp('bg-white')}
                onClick={handleIncome}
              >IN</button>
            </div>
          </div>
          <div className='w-[12rem] h-[4rem] flex justify-center items-center'>
            <div className='h-[4rem] md:w-[12rem] w-[9.5rem] flex justify-center items-center'>
              <button
                className={buttonOnToggle.outCome ? buttonIncomeOutComeStateDown('shadow-red-500') : buttonIncomeOutComeStateUp('bg-white')}
                onClick={handleOutcome}
              >OUT</button>
            </div>
          </div>
          <div className='hidden sm:hidden md:flex'>
            <div className='h-[4rem] '>
              <label>
                <input type="date" name='date' value={forms.date} onChange={onChangeInput} className="px-2 rounded-md  border-gray-300 h-[4rem] min-w-full shadow-2xl focus:outline-none" />
              </label>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmitForm}>

          <div className='mt-3'>
            <div className='col-span-3 h-[4rem]'>
              <label>
                <input
                  type="text"
                  name='title'
                  value={forms.title}
                  onChange={onChangeInput}
                  autoFocus
                  className="rounded-sm h-[4rem] min-w-full shadow-2xl  pl-[16px]  placeholder:font-bold focus:outline-none focus:ring-sky-500 focus:ring-2 font-sans" placeholder="  Title . . ." />
              </label>
            </div>
          </div>

          <div className='flex justify-end gap-4 mt-3'>
            <div className='bg-black w-full h-[4rem] col-span-2 '>
              <label>
                <input
                  onKeyPress={handleValidateInput}
                  type="text"
                  name='cost'
                  value={forms.cost}
                  onChange={onChangeInput}
                  className="appearance-none rounded-sm h-[4rem] min-w-full shadow-2xl pl-[16px]  placeholder:font-bold focus:outline-none focus:ring-sky-500 focus:ring-2 font-sans" placeholder="  Cost . . ." />
              </label>
            </div>
            <div className=' w-[12rem] h-[4rem] col-span-1 flex justify-center items-center'>
              <button className='rounded-md h-[4rem] border-b-[10px] hover:border-b-4 duration-300 bg-green-400  border-b-green-500 min-w-full text-black'>Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default InputHead