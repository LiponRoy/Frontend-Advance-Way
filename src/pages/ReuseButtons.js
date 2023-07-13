import React from 'react'
import ReBtn from '../components/reUseableComponents/ReBtn';

const ReuseButtons = () => {
    
    const myClick=(val)=>{

        console.log(val)

    }

  return (
    <div>
        <ReBtn className=' bg-green-700 boder-2 text-white' onclick={()=>myClick("Click")}>Click me</ReBtn>
        <ReBtn className=' bg-blue-700 boder-2 text-white' onclick={()=>myClick("Pressed")}>pressed me</ReBtn>
        <ReBtn className=' bg-orange-600 boder-2 text-white' onclick={()=>myClick("Slap")}>slap me</ReBtn>

      
    </div>
  )
}

export default ReuseButtons
