import React, { useState } from "react"

export const CheckoutContext = React.createContext()

const initialState = {
  address: "",
  city: "",
  postal: "",
  country: "",
  payment: "",
}

export const CheckoutProvider = ({children}) => {
  const [deliver, setDeliver] = useState(initialState)
  
  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value  
    setDeliver({ ...deliver, [name]: value })
  }

  const handlePayment = (e) => {
    setDeliver({ ...deliver, payment: e.target.value })
  }


  return (
    <CheckoutContext.Provider value={{deliver, setDeliver, handleChange, handlePayment}}>
      {children}
    </CheckoutContext.Provider>
  )
}

