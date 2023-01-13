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

  const AddStudent = (name, email, website, image, sex,reactjs, nodejs, angularjs, nextjs) => {
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
      react: reactjs,
      node:nodejs,
      angular:angularjs,
      next:nextjs,
    }
    setStudents([...students, newStudents]);
  }

  const [students, setStudents] = useState(initStudens);
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);



  return (
    <>
      <Header title={"student enrolment form"} />
      <div className="main_page">
      <Form addStudents = {AddStudent}/>
      <Students data = {students}/>
      </div>
    </>
  );
}

export default App;
