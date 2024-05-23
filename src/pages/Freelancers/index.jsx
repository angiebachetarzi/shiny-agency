import DefaultPicture from '../../assets/profile.png'
import Card from '../../components/Card'
import styled from 'styled-components'

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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  grid-template-rows: 350px 350px;
  grid-template-columns: repeat(2, 1fr);
`
const Freelancers = () => {
  return (
    <div>
      <h1>Find your service provider</h1>
      <CardsContainer>
        {freelancerProfiles.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={profile.jobTitle}
            picture={profile.picture}
            title={profile.name}
          />
        ))}
      </CardsContainer>
    </div>
  )
}

export default Freelancers
