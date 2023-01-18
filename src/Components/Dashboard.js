import React from 'react'
import PersonImg from '../Images/PersonImg.png'
import addbtn from '../Images/icons8-plus-math-90.png'
import edit from '../Images/icons8-pencil-90.png'
import { Link } from 'react-router-dom'
import back from '../Images/icons8-left-arrow-64.png'

const Dashboard = () => {
    return (
        <>
            <div className='back'><Link to="/"><img src={back} alt="" /> Back</Link></div>
            <div class="dashboard">
                <div class="dashDetails">
                    <img src={PersonImg} alt="" />
                    <div class="name">
                        <h1>Faculty_name</h1>
                        <span>Designation, Department of XYZ</span>
                    </div>
                </div>
                <div class="grid">
                    <div class="grid1">
                        <div class="areaResearch">
                            <div class="heading">Areas of Research</div>
                            <div class="box">
                                <ul>
                                    <li>Research Topic 1</li>
                                    <li>Research Topic 2</li>
                                    <li>Research Topic 3</li>
                                    <li>Research Topic 4</li>
                                </ul>
                                <Link to="/form" class="addbtn"><img src={addbtn} alt="" />Add</Link>
                            </div>
                        </div>
                        <div class="education">
                            <div class="heading">Education</div>
                            <div class="box">
                                <div class="details">
                                    <div>Institute Name</div>
                                    <div>Year of Graduation and Other Details.</div>
                                </div>
                                <button class="editbtn"><img src={edit} alt="" />Edit</button>
                            </div>
                        </div>
                    </div>
                    <div class="grid2">
                        <div class="contact">
                            <div class="heading">Contact Details</div>
                            <div class="box">
                                <div class="details">
                                    <div>Web Address - <a href="#">Click here</a> </div>
                                    <div>Email id - xyz@gmail.com</div>
                                    <div>Phone No. - 738XXXXXXX</div>
                                    <div>Qualification - XYZ, ABC</div>
                                    <div>Designation - Professor</div>
                                    <div>Research Interests - Lorem Ipsum</div>
                                    <div>.</div>
                                    <div>.</div>
                                    <div>.</div>
                                    <div>.</div>
                                    <div>.</div>
                                </div>
                                <button class="editbtn"><img src={edit} alt="" />Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard