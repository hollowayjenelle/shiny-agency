import React from 'react'
import styled from 'styled-components'
import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'

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

const CardsContainer = styled.div`
  display: grid;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`

const Freelancers = () => {
  const allFreelancers = freelancerProfiles.map((profile) => {
    return (
      <Card
        key={profile.name}
        label={profile.jobTitle}
        picture={profile.picture}
        name={profile.name}
      />
    )
  })
  return (
    <div>
      <h1>Freelancers</h1>
      <CardsContainer>{allFreelancers}</CardsContainer>
    </div>
  )
}

export default Freelancers
