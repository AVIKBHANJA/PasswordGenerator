import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length, setLength] = useState(4)
  const [numberallowed, setNumberallowed] = useState(false);
  const [charallowed, setcharallowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberallowed) str+="0123456789"
    if(charallowed) str+="!@#$%^&*()~`;'/?"

    for (let i = 0; i <= array.length; i++) {
      let char =Math.floor( Math.random()*str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)

  },[length,numberallowed,charallowed,setPassword])
  return (
    <>
    <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 my-8 text-orange-400 bg-gray-700 ' >
    <h1 className='text-white text-center text-3xl'>PASSWORD CREATOR</h1>
    <div className='flex'>
    
    <input type="text" 
    value={password}
    className='outline-none w-full py-1 px-2 rounded-lg '
    placeholder='password'
    readonly
    />
    <button className='outline-none bg-blue-400 text-white px-3 py-0.5 shrink-0'
    
    >copy</button>
    </div>
    <div className="flex text-sm gap-x-2">
    <div className="flex item-center gap-x-1">
      <input type="range" 
      className="cursor-pointer" 
      min={2}
      max={100}
      value={length}
      onChange={(e)=>{setLength(e.target.value)}}
      />
      <label htmlFor="">length : {length}</label>
    </div>
    <div className="flex item-center gap-x-1">
      <input type="checkbox" 
      className="cursor-pointer" 
      id = "numberInput"
      onChange={()=>{setNumberallowed((prev)=>!prev);}}
      />
      <label htmlFor="numberInput">numberallowed </label>
    </div>
    <div className="flex item-center gap-x-1">
      <input type="checkbox" 
      className="cursor-pointer" 
      id = "charInput"
      onChange={()=>{setcharallowed((prev)=>!prev);}}
      />
      <label htmlFor="charInput">charecterallowed </label>
    </div>
    </div>
    </div>
    </>
  )
}

export default App
