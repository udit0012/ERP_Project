import React from 'react'
import { Link } from 'react-router-dom'
import back from '../Images/icons8-left-arrow-64.png'

const ResearchForm = () => {
    return (
        <div>
            <div className='back'><Link to="/faculty"><img src={back} alt="" /> Back</Link></div>
            <div class="formbox">
                <h2>Faculty Research Details</h2>
                <form action="" class="form">
                    <div class="input">
                        <div class="input1"><label for="">Faculty name :</label><input type="text" placeholder="Name" /></div>
                        <div class="input1"><label for="">Faculty Id :</label><input type="text" placeholder="Faculty Id" /></div>
                    </div>
                    <div class="input">
                        <div class="input1"><label for="">Department :</label><input type="text" placeholder="Department" /></div>
                        <div class="input1"><label for="">Designation :</label><input type="text" placeholder="Designation" />
                        </div>
                    </div>
                    <div class="input"><label for="">Research Topic :</label><input type="text" placeholder="Topic" /></div>
                    <div class="input"><label for="">Research Major Subtopic :</label><input type="text"
                        placeholder="Major Subtopic" /></div>
                    <div class="input"><label for="">Research Published Id :</label><input type="text"
                        placeholder="Research Id" /></div>
                    <div class="input"><label for="">Published date :</label><input type="text"
                        placeholder="Date" /></div>
                    <div class="input"><label for="">Publisher Name :</label><input type="text" placeholder="Publisher Name" />
                    </div>
                    <div class="input"><label for="">Link of Research paper :</label><input type="text"
                        placeholder="Paste link here" /></div>

                    <div><button class="sbmbtn">Submit</button></div>
                </form>
            </div>
        </div>
    )
}

export default ResearchForm