import React from 'react'
import DefaultPicture from '../../assets/lilyImg.png'
import Card from '../../components/Card'

const Freelancers = () => {
  const freelancerProfiles = [
    {
      name: 'Jane Doe',
      jobTitle: 'Devops',
      picture: DefaultPicture,
    },
    {
      name: 'John Doe',
      jobTitle: 'Frontend developer',
      picture: DefaultPicture,
    },
    {
      name: 'Jean Bug',
      jobTitle: 'Fullstack Developer',
      picture: DefaultPicture,
    },
  ]

  const allFreelancers = freelancerProfiles.map(profile => {
    return <Card 
        key={profile.name}
        label={profile.jobTitle}
        picture={profile.picture}
        name={profile.name}
    />
  })
  return (
    <div>
      <h1>Freelancers</h1>
      {allFreelancers}
    </div>
  )
}

export default Freelancers
