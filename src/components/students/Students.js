import React from 'react'
import './student.css'

export default function Students(props) {
  return (
    <div className='students'>
        <div className="students_details">
            <div className="student_avater">
                <img src={props.data[0].avatar} alt="img" />
            </div>
            <div className="ditails">
                <h2 id="stu_name">Rahul Ray</h2>
                <h2 id="stu_sex">Gender : male</h2>
                <h2 id="stu_mail">Email : {props.data[0].email}</h2>
                <h2 id="stu_web">Website: <a href="www.google.com">click</a></h2>
                <h2 id="stu_skills">skills: java, html</h2>
            </div>
        </div>
    </div>
  )
}
