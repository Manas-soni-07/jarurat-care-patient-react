import React from 'react'
import './patientscart.css'

export default function Patientscard({patient,onView,onDelete }) {
  return (
    <div className='patient-card'> 
        <h3> {patient.name} </h3>
        <p>Age: {patient.age}</p>
        <p>Contact:{patient.phone}</p>
        <button onClick={() => onView(patient)}>View Details</button> <button className='dltbtn' onClick={()=>onDelete(patient.id)} >delete</button>
    </div>
  )
}
