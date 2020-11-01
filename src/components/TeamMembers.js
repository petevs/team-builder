import React, { useState } from 'react'
import MemberForm from './MemberForm'
import styled from 'styled-components'

const TeamMembers = props => {

    const [teamMembers, setTeamMembers] = useState([])

    console.log(teamMembers)


    const addNewTeamMember = (member) => {
      const newMember = {
        id: Date.now(),
        name: member.name,
        email: member.email,
        role: member.role,
      };
  
      setTeamMembers([newMember, ...teamMembers])
    }

    return (
        <Container>
            <MemberForm addNewTeamMember={addNewTeamMember}/>
            {teamMembers.map((member) => (
                <MemberCard key={member.id}>
                    <h2>{member.name}</h2>
                    <h3>{member.email}</h3>
                    <h3>{member.role}</h3>
                </MemberCard>
            ))}
        </Container>
    )
}

//Styled Components

const Container = styled.div`
    display: grid;
    gap: 2rem;
    grid-template-columns: 1fr;
    justify-items: center;
`

const MemberCard = styled.div`
    border: 1px solid #ccc;
    border-radius: 6px;
    background: #fff;
    padding: 1rem;
`



export default TeamMembers