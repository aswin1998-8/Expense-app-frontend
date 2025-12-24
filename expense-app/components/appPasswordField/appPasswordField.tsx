'use client';

import React from "react"
import {useState} from "react"
import {Eye, EyeOff} from "lucide-react"


const AppPasswordInputField = ({label}: {label:string}) => {
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword]= useState(false)
    const [error, setError] = useState('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value)
        if(error) setError('')
    }

    const toggleVisibility = (e:React.MouseEventHandler<HTMLButtonElement>) => {
      setShowPassword(!showPassword)
    }

    

   return(
    <>
    <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      </div>
      <div className="relative">
      <input
        type={showPassword ? "text" : "password"} // This is crucial for default browser validation and mobile keyboard optimization
        id="password"
        name="password"
        value={password}
        onChange={handleChange}
        placeholder="**********"
        required // Built-in HTML validation
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      <button
        type="button"
        onClick={toggleVisibility}
        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
      >
        {showPassword ? <EyeOff className="w-5 h-5" />  : <Eye className="w-5 h-5"/>}
      </button>
      </div>
      </>
    
   );

}

export default AppPasswordInputField