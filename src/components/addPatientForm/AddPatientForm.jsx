import React, { useState } from 'react'
import './addpatientform.css'

export default function AddPatientForm({onAdd}) {
  const [newPatient,setNewPatient] = useState({
    name : " ",
    age : " ",
    phone : " ",
    email : " ",
    address : " ",
  })

  const handleChange = (e)=>{
    setNewPatient({...newPatient,[e.target.name] : e.target.value});
  };  

  const handleSubmit = (e) =>{
      e.preventDefault();
      onAdd(newPatient)
      setNewPatient({name:"", age: "", phone: "", email: "", address: "" })
  }
  return (
    <div>
      <form action="" className='add-form' onSubmit={handleSubmit}>
        <input name='name' type='text' placeholder='Name' value={newPatient.name} onChange={handleChange} required/>
        <input name='age' type='text' placeholder='age' value={newPatient.age} onChange={handleChange} required/>
        <input name="email" type='email' placeholder='Email' value={newPatient.email} onChange={handleChange} required />
        <input name="phone" type='number' placeholder="Phone" value={newPatient.phone} onChange={handleChange} required />
        <input name="address" type='type' placeholder="Address" value={newPatient.address} onChange={handleChange} />
      <button type="submit">Add Patient</button>
      </form>
    </div>
  )
}
