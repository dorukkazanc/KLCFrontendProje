import React, { useEffect, useState } from "react";
import Student from "./component/Student";
import './App.css';
import AddStudent from "./component/AddStudent";

function App() {

  const [students, setStudents] = useState([]);
  useEffect(()=>{

    fetchData();

  }, [])
  
  const fetchData = async () => {
    await fetch('https://localhost:44303/api/Student')
    .then((result) => result.json())
    .then((data) => setStudents(data))
  }

  
  const doAdd = async (StudentName, StudentAge, StudentNumber) => {
    
    await fetch('https://localhost:44303/api/Student', {
      method: 'POST',
      body: JSON.parse(JSON.stringify({
        StudentName:StudentName,
        StudentAge:StudentAge,
        StudentNumber:StudentNumber
      })),

    })
    .then((result) =>{
      if(result.status !==201){
        return
      }else{
        return result.json();
      }
    })
    .then((data)=> {
      setStudents((students)=> [...students,data])
    })
  }

  const doDelete = async(StudentID) => {
    await fetch(`https://localhost:44303/api/Student/${StudentID}`,{
      method: 'DELETE'
    })
    .then((res) => {
      setStudents(students.filter((student) => {
        return student.StudentID !== StudentID ;
      }))
    })
    
  }


  return (
    <div className="App">

      <AddStudent doAdd={doAdd} />
      <div>
        {
          students.map((student) =>(
            <Student key={student.StudentID} StudentID={student.StudentID} StudentName ={student.StudentName} StudentAge={student.StudentAge} StudentNumber={student.StudentNumber} doDelete={doDelete}/>
            
          ))

        }
        
      </div>
    
    
    </div>
  );
}


export default App;
