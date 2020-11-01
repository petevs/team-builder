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
            <Headline>Our Team Members</Headline>
            <Members>
            {teamMembers.map((member) => (
                <MemberCard key={member.id}>
                    <MemberTitle>{member.name}</MemberTitle>
                    <MemberDetail>{member.email}</MemberDetail>
                    <MemberDetail>{member.role}</MemberDetail>
                </MemberCard>
            ))}
            </Members>
            <MemberForm addNewTeamMember={addNewTeamMember}/>
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

const Headline = styled.h1`
    font-size: 3.5rem;
    padding-top: 2rem;
    color: #fff;
`

const Members = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
`

const MemberCard = styled.div`
    min-width: 300px;
    border: 1px solid #ccc;
    border-radius: 6px;
    background: #fff;
    padding: 1rem;
`

const MemberTitle = styled.h2`
    font-size: 2.4rem;
`

const MemberDetail = styled.h3`
    font-size: 1.4rem;
    font-weight: 400;
`



export default TeamMembers