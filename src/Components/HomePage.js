import React, { useState } from 'react'
import PersonImg from '../Images/PersonImg.png'
import { Link } from 'react-router-dom'

const HomePage = () => {
    const [department, setDepartment] = useState(true)
    const [departName,setDepartName] = useState("")
    return (
        <div className='homepage'>
            <div className='homebox'>
                <div className='heading'>College Of Technology</div>
                <div className='searchBox'>
                    <div className='options'>
                        <div className={`option1 ${department ? "active" : ""}`} onClick={() => setDepartment(true)}>Departments</div>
                        <div className={`option1 ${department ? "" : "active"}`} onClick={() => setDepartment(false)}>Faculty</div>
                    </div>
                    <div className='optionListBox'>
                        {department ? <div className='optionsLists'>
                            <div className='listItems' onClick={() => {setDepartment(false); setDepartName("Infromation technology")}}>Infromation technology</div>
                            <div className='listItems' onClick={() => {setDepartment(false); setDepartName("Computer Engineering")}}>Computer Engineering</div>
                            <div className='listItems' onClick={() => {setDepartment(false); setDepartName("Mechanical Engineering")}}>Mechanical Engineering</div>
                            <div className='listItems' onClick={() => {setDepartment(false); setDepartName("Civil Engineering")}}>Civil Engineering</div>
                            <div className='listItems' onClick={() => {setDepartment(false); setDepartName("Electrical Engineering")}}>Electrical Engineering</div>
                            <div className='listItems' onClick={() => {setDepartment(false); setDepartName("Electronics and Communication Engineering")}}>Electronics and Communication Engineering</div>
                            <div className='listItems' onClick={() => {setDepartment(false); setDepartName("Industrial and Production Engineering")}}>Industrial and Production Engineering</div>
                            <div className='listItems' onClick={() => {setDepartment(false); setDepartName("Agricultural Engineering")}}>Agricultural Engineering</div>
                        </div> :
                            <div className='optionsLists'>
                                <div className='listItems listItems2'><Link to="/faculty">
                                    <div><img src={PersonImg} alt="" /></div>
                                    <div>
                                        <div className='name'>Demo Faculty</div>
                                        <span className='desig'>Professor, Department of {departName}</span>
                                    </div>
                                </Link></div>
                                <div>Sorry, No Faculty data Available</div>
                            </div>}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HomePage