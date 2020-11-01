import React, { useState } from 'react'

const MemberForm = props => {
    
    const { addNewTeamMember } = props
    const [teamMember, setTeamMember] = useState({
        name: "",
        email: "",
        role: "",
      })

    const handleChanges = (event) => {
        setTeamMember({...teamMember, [event.target.name]: event.target.value})
    }

    const submitForm = (event) => {
        event.preventDefault();
        addNewTeamMember(teamMember);
        setTeamMember({ name: "", email: "", role: ""})
    }

    return (
        <form onSubmit={submitForm}>
            <h2>Add a Team Member</h2>
            <label htmlFor='name'>Name</label>
            <input
                id='name'
                name='name' 
                type='text' 
                placeholder='Enter Member Name'
                onChange={handleChanges}
                value={teamMember.name}
                required
            /> <br />

            <label htmlFor='email'>Email</label>
            <input 
                id='email'
                name='email'
                type='email' 
                placeholder='Enter Member Email'
                onChange={handleChanges}
                value={teamMember.email}
                required
            /> <br />

            <label htmlFor='memberRole'>Role</label>
            <input
                id='role'
                name='role'
                type='text' 
                placeholder='Enter Member Role' 
                value={teamMember.role}
                onChange={handleChanges}
                required
                /> <br />
            <button type='submit'>Add Team Member</button>
        </form>
    )
}

export default MemberForm