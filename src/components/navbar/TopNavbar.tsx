import {useEffect, useState} from 'react'
import API from '../../helpers/API';

function TopNavbar() {
    const [name, setName] = useState<string>();

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
          API.readAll()
        }, 3000)
    
        return () => clearTimeout(delayDebounceFn)
      }, [name])

      const handleName = (e: React.FormEvent<HTMLInputElement>)=>{
        setName(e.currentTarget.value)
      }
  return (
   <>
    <div className="absolute top-0 h-20 w-full z-[1035] bg-[#1B1C1D] flex items-center border-b-2">
        <input  
        className="h-10 border ms-36 rounded-3xl mt-3  px-3 text-gray-700 leading-tight focus:outline-none  text-sm w-2/6"
        type="text"
        placeholder="search for a song"
        onChange={handleName}
        />
    </div>
   </>
  )
}

export default TopNavbar
