'use client';

import React from "react"
import {useState} from "react"


const AppInputField = ({label}: {label:string}) => {
    const [inputField, setinputField] = useState('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setinputField(e.target.value)
    }


   return(
    <>
    <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
        {label}
      </label>
      </div>
      <div>
      <input
        type="text" // This is crucial for default browser validation and mobile keyboard optimization
        id="input"
        name="input-field"
        value={inputField}
        onChange={handleChange}
        placeholder=""
        required // Built-in HTML validation
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
      />
      </div>
      </>
    
   );

}

export default AppInputField