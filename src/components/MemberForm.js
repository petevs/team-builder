import React, { useState } from 'react'
import styled from 'styled-components'

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
        <Form onSubmit={submitForm}>
            <FormTitle>Add New Team Member</FormTitle>
            <Label htmlFor='name'>Name</Label>
            <Input
                id='name'
                name='name' 
                type='text' 
                placeholder='Enter Member Name'
                onChange={handleChanges}
                value={teamMember.name}
                required
            /> <br />

            <Label htmlFor='email'>Email</Label>
            <Input 
                id='email'
                name='email'
                type='email' 
                placeholder='Enter Member Email'
                onChange={handleChanges}
                value={teamMember.email}
                required
            /> <br />

            <Label htmlFor='memberRole'>Role</Label>
            <Input
                id='role'
                name='role'
                type='text' 
                placeholder='Enter Member Role' 
                value={teamMember.role}
                onChange={handleChanges}
                required
                /> <br />
            <Button type='submit'>Add Member</Button>
        </Form>
    )
}

// Styled Componenets


const Form = styled.form`
    background: #fff;
    padding: 2rem;
    margin: 2rem;
    border-radius: .5rem;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,.25);
    display: grid;
    grid-template-columns: 1fr;
    justify-items: start;
`

const FormTitle = styled.h2`
    font-size: 1.8rem;
    padding: 1rem 0;
`

const Input = styled.input`
    font-size: 1.4rem;
    padding: 1rem;
    border: 1px solid #ccc;
    border-radius: 6px;
    margin: .5rem 0;
    width: 100%;
`

const Label = styled.label`
    text-transform: uppercase;
`

const Button = styled.button`
    width: 100%;
    padding: 1rem;
    font-size: 1.6rem;
    border-radius: 6px;
    color: #fff;
    font-weight: 700;
    background: #882AE1;
    &:hover{
        background-color: #6712E0;
    }
`


export default MemberForm