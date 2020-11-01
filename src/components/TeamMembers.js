import React, { useState } from 'react'
import MemberForm from './MemberForm'

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
        <div>
            <MemberForm addNewTeamMember={addNewTeamMember}/>
            {teamMembers.map((member) => (
                <h3 key={member.id}>{member.name}</h3>
            ))}
        </div>
    )
}

export default TeamMembers