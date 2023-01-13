import React from 'react'
import './student.css'

export default function Students(props) {
  return (
    <div className='students'>
        {
          props.data.length === 0 ? " ":
          props.data.map((user) => {
            return (
              <div className="students_details">
            <div className="student_avater">
                <img src={user.image} alt="img" />
            </div>
            <div className="ditails">
                <h2 id="stu_name">{user.name}</h2>
                <h2 id="stu_sex">Gender : {user.sex}</h2>
                <h2 id="stu_mail">Email : {user.email}</h2>
                <h2 id="stu_web">Website: <a href={user.website}>{user.website}</a></h2>
                <h2 id="stu_skills">skills: {user.react} {user.node} {user.angular} {user.next}</h2>
            </div>
        </div>
            )
          })
        }
    </div>
  )
}
