import "./App.css";
import Form from "./components/form/Form";
import Header from "./components/Header";
import Students from "./components/students/Students";

function App() {
const data = [
    {
      id: 1,
      email: "george.bluth@reqres.in",
      first_name: "George",
      last_name: "Bluth",
      avatar: "https://reqres.in/img/faces/1-image.jpg",
    },
  ];
  return (
    <>
      <Header title={"student enrolment form"} />
      <div className="main_page">
      <Form/>
      <Students data = {data}/>
      </div>
    </>
  );
}

export default App;
