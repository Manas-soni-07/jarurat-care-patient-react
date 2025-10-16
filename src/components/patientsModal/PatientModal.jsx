import React from 'react'
import './patientsModal.css'

export default function PatientModal({patient,onClose}) {
  if(!patient) return null;

  return (
    <div className='modal-overlay' onClick={onClose}>
      <div className='modal-content' onClick={(e)=>e.stopPropagation()}>
        <button onClick={onClose} className='btn'>✖</button>
        <h1>{patient.name}</h1>
        <p><b>Age : {patient.age}</b></p>
        <p><b>Phone : {patient.phone}</b></p>
        <p><b>Email : {patient.email}</b></p>
        <p><b>Address : {patient.address}</b></p>
      </div>
    </div>
  )
}
