import React from 'react'
import './form.css'

export default function Form() {
  return (
    <>
        <form className='form'>
            <div className="name">
            <label htmlFor="name">Name</label>
            <input type="text"  id="name" name = "name" required/>
            </div>
            <div className="email">
            <label htmlFor="email">Email</label>
            <input type="email"  id="email" name = "email" required/>
            </div>
            <div className="web">
            <label htmlFor="website">Website</label>
            <input type="text"  id="website" name = "website"/>
            </div>
            <div className="image">
            <label htmlFor="image">Image</label>
            <input type="text"  id="image" name = "image" required/>
            </div>
            <div className="gender">
            <label htmlFor="gender">Gender</label>
            <input type="radio" id="gender" name = "gender" required/>
            <label htmlFor="gender">Male</label>
            <input type="radio" id="gender" name = "gender" required/>
            <label htmlFor="gender">Female</label>
            <input type="radio" id="gender" name = "gender" required/>
            <label htmlFor="gender">Others</label>
            </div>
            <h2>Skills</h2>

            <div className="check_values">
            <input type="checkbox" name="skill1" id="skill1" value = "java"/>
            <label htmlFor="skill1">React js</label>
            <input type="checkbox" name="skill1" id="skill2" value = "java"/>
            <label htmlFor="skill2">Angular js</label>
            <input type="checkbox" name="skill1" id="skill3" value = "java"/>
            <label htmlFor="skill3">Next js</label>
            <input type="checkbox" name="skill1" id="skill4" value = "java"/>
            <label htmlFor="skill4">Node js</label>
            </div>
        </form>
    </>
  )
}
