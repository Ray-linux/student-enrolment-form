import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Header from "./components/Header";
import Students from "./components/students/Students";

function App() {
  let initStudens;
  if(localStorage.getItem("students") === null){
    initStudens = [];
  }
  else{
    initStudens = JSON.parse( localStorage.getItem("students"));
  }

  const AddStudent = (name, email, website, image, sex) => {
    let sno;
    if(students.length===0){
      sno = 0;
    }
    else {
      sno = students[students.length-1].sno + 1;
    }
    const newStudents = {
      sno: sno,
      name: name,
      email: email,
      website : website,
      image: image,
      sex: sex,
    }
    setStudents([...students, newStudents]);
    console.log(newStudents);
  }

  const [students, setStudents] = useState(initStudens);
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students])


  console.log(students)

  const data = [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
  ];
  return (
    <>
      <Header title={"student enrolment form"} />
      <div className="main_page">
      <Form addStudents = {AddStudent}/>
      <Students data = {data}/>
      </div>
    </>
  );
}

export default App;
