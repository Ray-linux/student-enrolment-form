import React, { useState } from 'react'
import './form.css'

export default function Form(props) {

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [website, setWebsite] = useState("");
const [image, setImage] = useState("");
const [sex, setSex] = useState("");
const  [reactjs, setReactjs] = useState("");
const  [nodejs, setNodejs] = useState("")
const  [angularjs, setAngularjs] = useState("")
const  [nextjs, setNextjs] = useState("")

const submit = (e) => {
  e.preventDefault();
  if(!name){
    alert("Name can't be empty")
  }
  else{
  props.addStudents(name, email, website, image, sex);
    setName("")
    setEmail("")
    setWebsite("")
    setImage("")
    setSex("")
  }
}

// console.log(sex)

  return (
    <>
        <form className='form' onSubmit={submit}>
            <div className="name">
            <label htmlFor="name">Name</label>
            <input type="text"  id="name" name = "name" value={name} onChange={(e) => {setName(e.target.value)}}/>
            </div>
            <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email"  id="email" name = "email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            </div>
            <div className="web">
            <label htmlFor="website">Website</label>
            <input type="text"  id="website" name = "website" value={website} onChange={(e) => {setWebsite(e.target.value)}}/>
            </div>
            <div className="image">
            <label htmlFor="image">Image</label>
            <input type="text"  id="image" name = "image" value={image} onChange={(e) => {setImage(e.target.value)}}/>
            </div>
            <div className="gender">
            <label>Gender</label>
            <input type="radio" id="gender" name = "gender"  value="male" onChange={(e) => {setSex(e.target.value)}}/>
            <label htmlFor="gender">Male</label>
            <input type="radio" id="gender" name = "gender"  value="female" onChange={(e) => {setSex(e.target.value)}}/>
            <label htmlFor="gender">Female</label>
            <input type="radio" id="gender" name = "gender"  value="others" onChange={(e) => {setSex(e.target.value)}}/>
            <label htmlFor="gender">Others</label>
            </div>
            <div className="check_values">
            Skills
            <input type="checkbox" name="reactjs" id="skill1" value="reactjs"onChange={(e) => {setReactjs(e.target.value)}}/>
            <label htmlFor="skill1">React js</label>
            <input type="checkbox" name="nodejs" id="skill2" value="nodejs" onChange={(e) => {setNodejs(e.target.value)}}/>
            <label htmlFor="skill2">Node js</label>
            <input type="checkbox" name="angularjs" id="skill3" value="angularjs" onChange={(e) => {setAngularjs(e.target.value)}}/>
            <label htmlFor="skill3">Angular js</label>
            <input type="checkbox" name="nextjs" id="skill4" value="nextjs" onChange={(e) => {setNextjs(e.target.value)}}/>
            <label htmlFor="skill4">Next js</label>
            </div>
            <div className="btns">
                <button type='submit' id="Enroll">Enroll Student</button>
                <button id="clear">Clear</button>
            </div>
        </form>
    </>
  )
}
