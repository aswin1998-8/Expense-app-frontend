'use client';

import React from "react"
import {useState} from "react"


const AppEmailInputField = () => {
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value)
        if(error) setError('')
    }

    const validateEmail = (email:String) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            setError("Please Enter a valid email address");
            return false
        }
        return true;
    };

   return(
    <>
    <div>
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
        Email Address *
      </label>
      </div>
      <div>
      <input
        type="email" // This is crucial for default browser validation and mobile keyboard optimization
        id="email"
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="you@example.com"
        required // Built-in HTML validation
        className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${error ? 'border-red-500' : 'border-gray-300'}`}
      />
      </div>
      </>
    
   );

}

export default AppEmailInputField