import React, { useEffect, useState } from 'react'
import AddPatientForm from '../../addPatientForm/AddPatientForm'
import Patientscard from '../../patientsCard/Patientscard'
import PatientModal from '../../patientsModal/PatientModal'
import './patients.css'

export default function Patients() {
  const [patients,setPatients] = useState([])
  const [filtered,setFiltered] = useState([])
  const [selectedPatient,setSelectedPatient] = useState(null)
  const [search,setSearch] = useState("")
  const [loading,setLoading ] = useState(true)
  const [error,setError] = useState("")


   useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/users")
      .then((res)=> res.json())
      .then((data)=>{
         console.log(data,"data")
         const formatted = data.map((item)=>({
            id : item.id,
            name : item.name,
            age : Math.floor(Math.random() * 40) + 20,
            phone : item.phone,
            email : item.email,
            address: item.address.city,
         }));
         setPatients(formatted);
         setFiltered(formatted);
         setLoading(false)
      }).catch(()=>{
        setError("Failded to fetch data");
        setLoading(false)
      });
   },[])


   useEffect(()=>{
     setFiltered(
      patients.filter((p)=>p.name.toLowerCase().includes(search.toLowerCase())
       )
     )
   },[search,patients])


   const handleAdd = (newPatient)=>{
      const added = {...newPatient,id:patients.length+1}
      setPatients([...patients,added])
   }

  const handleDelete = (id) => {
    const updated = patients.filter((p) => p.id !== id);
    setPatients(updated);
  };
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='page-contiainer'>
     <h1>  Patients List</h1>
      <input 
         type="text"
         placeholder='Search by name......' 
         value={search}
         onChange={(e)=> setSearch(e.target.value)}
         className='search-bar'/>

       <AddPatientForm onAdd = {handleAdd} />

       <div className='patient-grid'>
          {
            filtered.map((patient)=>(
              <Patientscard
              key={patient.id}
              patient = {patient}
              onView={setSelectedPatient}
              onDelete={handleDelete}
              />
            ))
          }
       </div>

      <PatientModal patient={selectedPatient} onClose={()=> setSelectedPatient(null)}/>

      </div>  
  )
}
