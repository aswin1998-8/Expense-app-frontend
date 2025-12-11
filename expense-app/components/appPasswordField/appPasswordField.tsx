'use client';

import React from "react"
import {useState} from "react"


const AppPasswordInputField = () => {
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value)
        if(error) setError('')
    }

    

   return(
    <>
    <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
        Password *
      </label>
      </div>
      <div>
      <input
        type="password" // This is crucial for default browser validation and mobile keyboard optimization
        id="password"
        name="password"
        value={password}
        onChange={handleChange}
        required // Built-in HTML validation
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      </div>
      </>
    
   );

}

export default AppPasswordInputField