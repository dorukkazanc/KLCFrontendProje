import React from 'react'

const AddStudent = ({doAdd}) => {


    const handleOnSubmit = (std) => {
        std.preventDefault();
        doAdd(std.target.StudentName, std.target.StudentAge, std.target.StudentNumber);
        std.target.StudentName.value = "";
        std.target.StudentAge.value = "";
        std.target.StudentNumber.value = "";
    }
  return (
    <div>
        <form onSubmit={handleOnSubmit}>

            <h3>Add Student</h3>

            <input name="StudentName" />
            <input name="StudentAge" />
            <input name="StudentNumber" />
            <button onSubmit={handleOnSubmit}>Add</button>


        </form>
        Add Student
    </div>
  )
}

export default AddStudent
