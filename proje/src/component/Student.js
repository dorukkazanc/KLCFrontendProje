import React from 'react'
import './Student.css'

const Student = ({StudentID, StudentName, StudentAge, StudentNumber, doDelete}) => {
  
  const handleOnDelete = () => {
    doDelete(StudentID);
  }
  
  return (
    <div className='list'>
        <span>{StudentName}</span>
        <span>{StudentAge}</span>
        <span>{StudentNumber}</span>
        <span>
            <button>Edit</button>
            <button onClick={handleOnDelete}>Delete</button>
        </span>

      
    </div>
  )
}

export default Student
